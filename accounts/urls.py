from django.urls import path
from .views import RegistrationAPI, SendVerficationAPI, ValidateVerificationView, UsersAPI, UserAPI, PasswordResetAPI, PasswordResetView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenBlacklistView
)


urlpatterns = [
    path('register/', RegistrationAPI.as_view(), name = 'register_user'),
    path('logout/',  TokenBlacklistView.as_view(), name = 'logout_user'),
    path('login/', TokenObtainPairView.as_view(), name = 'login_user'),
    path('token-refresh/', TokenRefreshView.as_view(), name = 'token_refresh'),
    path('email-verification/', SendVerficationAPI.as_view(), name = 'send-email-verification'),
    path('email-verification/<id>/<token>/', ValidateVerificationView.as_view(), name = 'verify-email'),
    path('user/', UsersAPI.as_view(), name = 'users-data'),
    path('user/<id>/', UserAPI.as_view(), name = 'user-data'),
    path('password-reset/', PasswordResetAPI.as_view(), name = 'password-reset'),
    path('password-reset-redirect/<id>/<token>/', PasswordResetView.as_view(), name = 'password-reset-redirect'),
]