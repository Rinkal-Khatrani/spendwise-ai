
# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)

    default_currency = models.CharField(
        max_length=3,
        default="INR"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email