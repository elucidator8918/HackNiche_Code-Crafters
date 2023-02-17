from django.urls import path
from .views import ModelDeployement

urlpatterns = [
    path('model-set/', ModelDeployement.as_view(), name = 'model-set'),
]