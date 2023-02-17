from rest_framework import serializers
from accounts.serializers import UserSerializer
from .models import Budget,Expence,User

class BugetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = '__all__'
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['user'] = UserSerializer(
            User.objects.get(pk=data['user'])).data
        return data

class ExpenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expence
        fields = '__all__'
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['budget'] = UserSerializer(
            User.objects.get(pk=data['budget'])).data
        return data