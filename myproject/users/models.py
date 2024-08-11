from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    favorite_food = models.CharField(max_length=100, blank=True, null=True)
    favorite_artist = models.CharField(max_length=100, blank=True, null=True)
    favorite_place = models.CharField(max_length=100, blank=True, null=True)
    favorite_color = models.CharField(max_length=100, blank=True, null=True)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_set',  # Add a unique related_name
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_set',  # Add a unique related_name
        blank=True,
    )
