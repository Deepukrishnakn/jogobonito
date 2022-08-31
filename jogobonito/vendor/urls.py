from unicodedata import name
from . import views
from .views import LoginVenndorView
from django.urls import path

urlpatterns = [
    path('vendorRegister/', views.vendorRegister, name="vendorRegister"),
    path('vendorlogin/',LoginVenndorView.as_view(),name='vendorlogin'),
    path('get_vendor/', views.get_vendor, name="get_vendor"),
 ]