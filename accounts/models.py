from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from phonenumber_field.modelfields import PhoneNumberField
from .managers import UserManager

# Create your models here.
class User(AbstractBaseUser):
    First_name = models.CharField(max_length=20, help_text='Enter your First name')
    Last_name = models.CharField(max_length=20, help_text='Enter your Last name')
    date_of_birth = models.DateField(null=True, blank=True, help_text='Enter your Date of Birth')
    phone = PhoneNumberField(null=True, blank=True, help_text='Enter your Phone Number')
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
        help_text='Enter your Email',
    )
    profile_pic = models.ImageField(null=True, blank=True, verbose_name="Profile Photo", upload_to = 'Profile-Pic/',help_text='Upload your Profile Photo')
    email_token =  models.CharField(max_length=250, null=True, blank=True)
    password_reset_token = models.CharField(max_length=250, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_email_verified = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.First_name+' '+self.Last_name+', '+self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin
    
    def is_verified(self):
        return (self.is_email_verified)