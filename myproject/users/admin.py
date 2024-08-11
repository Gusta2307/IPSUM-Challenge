from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('favorite_food', 'favorite_artist', 'favorite_place', 'favorite_color', 'profile_image')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)
