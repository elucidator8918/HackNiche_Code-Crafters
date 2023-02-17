from django.db import models
from accounts.models import User

# Create your models here.
class Budget(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_reln')
    name = models.CharField(max_length=120)
    max_spending = models.IntegerField()

class Expence(models.Model):
    budget = models.ForeignKey(Budget, on_delete=models.CASCADE, related_name='buget_reln')
    description = models.CharField(max_length=120)
    amount = models.IntegerField()