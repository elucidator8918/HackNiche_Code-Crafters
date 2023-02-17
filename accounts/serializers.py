from .models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def validate(self, data):
        
        if data.get('First_name') is not None:
            for i in data['First_name'] :
                if i.isdigit():
                    raise serializers.ValidationError({'error':'First Name cannot have digits'})
        
        if data.get('Last_name') is not None:    
            for i in data['Last_name'] :
                if i.isdigit():
                    raise serializers.ValidationError({'error':'Last Name cannot have digits'})
        
        return data
    def create(self, validated_data):
        user = User.objects.create( 
            First_name = validated_data.get('First_name'), 
            Last_name = validated_data.get('Last_name'), 
            date_of_birth = validated_data.get('date_of_birth'),
            phone = validated_data.get('phone'),
            email = validated_data.get('email'),
            profile_pic = validated_data.get('profile_pic'),
            )
        user.set_password(validated_data.get('password'))
        user.save()
        return user