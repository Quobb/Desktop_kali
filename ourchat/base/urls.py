from django.urls import path
from . import views

urlpatterns = [
    path('',views.Lobby),
    path('room/',views.Room,name='room'),
]
