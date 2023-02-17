from django.urls import path
from .views import BudgetAPI,ExpenceAPI

urlpatterns = [
    path('budget/', BudgetAPI.as_view(), name = 'budget'),
    path('Expence/', ExpenceAPI.as_view(), name = 'expence'),
]