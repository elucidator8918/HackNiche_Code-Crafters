from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from .models import User
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from uuid import uuid4
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated
from django.contrib.sites.models import Site
from rest_framework.mixins import ListModelMixin,DestroyModelMixin,RetrieveModelMixin,UpdateModelMixin
from .custompermisions import IsVerified

# Create your views here.
class RegistrationAPI(GenericAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    def post(self, request):
        serializer = UserSerializer(data = request.data)
        if not serializer.is_valid():
            return Response({'status':422, 'errors': serializer.errors, 'message': 'Unprocessable Entity'})

        user = serializer.save()
        refresh = RefreshToken.for_user(user)

        return Response({'status': 200, 'payload' : {"User email" : user.email , "User id" : user.id},'message' : 'Registration Successful', 'refresh': str(refresh), 'access': str(refresh.access_token)})

class UsersAPI(GenericAPIView, ListModelMixin):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    authentication_classes = [JWTAuthentication, ]
    permission_classes = [IsAuthenticated, IsVerified]
    def get(self, request):
        return self.list(request)

class UserAPI(GenericAPIView, DestroyModelMixin, RetrieveModelMixin, UpdateModelMixin):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_field = 'id'
    authentication_classes = [JWTAuthentication,]
    permission_classes = [IsAuthenticated, IsVerified]
    def get(self, request, id):
        return self.retrieve(request, id)
    def delete(self, request, id):
        return self.destroy(request, id)
    def put(self, request, id):
        return self.update(request, id)
    def patch(self, request, id):
        return self.partial_update(request, id)

class SendVerficationAPI(APIView):
    authentication_classes = [JWTAuthentication, ]
    permission_classes = [IsAuthenticated, ]
    def post(self, request):
        user = request.user
        token =  uuid4()
        user.email_token = token
        user.save()
        try:
            subject = 'Welcome to Personal Finance Management System'
            message = f'Hi!\n{user.First_name} {user.Last_name}, thank you for registering in Committeeent System.\nPlease Click here to verfy Your Account {Site.objects.get_current().domain}accounts/verify/{user.id}/{token}/\nThis is a Computer generated mail don\'t reply to this mail'
            email_from = settings.EMAIL_HOST_USER
            recipient_list = [user.email, ]
            send_mail( subject, message, email_from, recipient_list )
            return Response({'status': 200,'message' : 'Please Check Your Mail, an Email verfication link has been provided'})
        except Exception as e:
            return Response({'status': 405, 'error': str(e) ,'message': 'Sorry Some error has occured, Please try again after sometime'})

class ValidateVerificationView(APIView):
    def get(self, request, id, token):
        try:
            user = User.objects.get(id = id)
            if(token == user.email_token):
                user.is_email_verified = True
                user.save()
                return HttpResponse('<h1>User is Verified Successfully</h1>')
            else:
                return HttpResponse('<h1>Token is not valid</h1>')
        except:
            return HttpResponse('<h1>Sorry Some error has occured</h1>')

class PasswordResetAPI(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated, IsVerified]
    def post(self, request):
        try:
            user = request.user
            subject = 'Password Reset Mail'
            uuid = uuid4()
            user.password_reset_token = uuid
            user.save()
            message = f'{Site.objects.get_current().domain}accounts/password-reset-redirect/{user.id}/{uuid}/'
            email_from = settings.EMAIL_HOST_USER
            recipient_list = [user.email, ]
            send_mail( subject, message, email_from, recipient_list )
            return Response({'status': 200, 'message' : 'Please check your mail a password reset link has been provided'})
        except Exception as e:
            return Response({'status': 405, 'error': str(e) ,'message': 'Sorry Some error has occured, Please try again after sometime'})

class PasswordResetView(APIView):
    def get(self , request, id, token):
        user_obj = User.objects.get(id=id)
        if(token == user_obj.password_reset_token):
            return render(request, "accounts/passwordreset.html", {'id' : id, 'token' : token})
        else:
            return HttpResponse('<h1>Token is not valid</h1>')
    def post(self, request, id, token):
        password = request.POST['password']
        user_obj = User.objects.get(id=id)
        if(token == user_obj.password_reset_token):
            try:
                user_obj.set_password(password)
                user_obj.save()
                return HttpResponse('<h1>User Password changed Successfully</h1>')
            except:
                return HttpResponse('<h1>Some error has occured</h1>')
        else:
            return HttpResponse('<h1>Token is not valid</h1>')
    
