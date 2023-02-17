from django.shortcuts import render
from .models import Budget,Expence
from .serializers import BugetSerializer,ExpenceSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from accounts.custompermisions import IsVerified
# Create your views here.

class BudgetAPI(GenericAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated, IsVerified]
    serializer_class = BugetSerializer
    queryset = Budget.objects.all()
    def post(self, request):
        user = request.user
        budget_name = request.data['budget_name']
        budget_max_spending = request.data['budget_max_spending']
        serializer = BugetSerializer(data = {'user':user, 'name': budget_name, 'max_spending': budget_max_spending})
        if not serializer.is_valid():
            return Response({'status':422, 'errors': serializer.errors, 'message': 'Unprocessable Entity'})
        budget = serializer.save()
        return Response({'status': 200, 'payload' : {"Budget id" : budget.id},'message' : 'Budget added Successful'})
    
    def get(self, request):
        budget_obj = Budget.objects.filter(user = request.user)
        budget_data = BugetSerializer(budget_obj, many=True).data
        return Response({'status': 200, 'payload':{'User': str(request.user),'Budgets': budget_data}})

class ExpenceAPI(GenericAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated, IsVerified]
    serializer_class = ExpenceSerializer
    queryset = Expence.objects.all()
    
    def post(self, request):
        budget = request.data['budget']
        description = request.data['description']
        amount = request.data['amount']
        serializer = ExpenceSerializer(data = {'budget':budget, 'description': description, 'amount':amount})
        if not serializer.is_valid():
            return Response({'status':422, 'errors': serializer.errors, 'message': 'Unprocessable Entity'})
        expence = serializer.save()
        return Response({'status': 200, 'payload' : {"Expense id" : expence.id},'message' : 'Expense added Successful'})
    
    def get(self, request):
        expence_obj = Expence.objects.filter(budget = request.budget)
        expence_data = ExpenceSerializer(expence_obj, many=True).data
        return Response({'status': 200, 'payload':{'Expences': expence_data}})

