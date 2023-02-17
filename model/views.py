from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import pickle

# Create your views here.
class ModelDeployement(APIView):
    def get(self, request):
        duration = eval(request.data.get('duration'))
        compony = request.data.get('compony')
        model = pickle.load(open(f'{compony}.sav','rb'))
        pred=model.forecast(steps = duration, alpha = 0.01).to_numpy()[-1]
        return Response({'pred':pred})