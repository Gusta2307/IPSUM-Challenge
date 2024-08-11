from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class UserRegistrationForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = CustomUser
        fields = [
            'username', 
            'email', 
            'password1', 
            'password2', 
            'favorite_food', 
            'favorite_artist', 
            'favorite_place', 
            'favorite_color', 
            'profile_image'
        ]
