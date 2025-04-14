from django.contrib.auth.models import AbstractUser
from django.db import models

from .enums import ReferralEnums


class User(AbstractUser):
    is_verified = models.BooleanField(default=False)
    birth_date = models.DateField(blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    broker = models.CharField(max_length=100, blank=True, null=True)
    occupation = models.CharField(max_length=100, blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profiles/', blank=True, null=True)
    referral_app = models.CharField(choices=ReferralEnums.choices, max_length=50, blank=True, null=True)
    referral_code = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        full_name = f"{self.first_name or ''} {self.last_name or ''}".strip()
        return full_name or self.username
