from . import views
from .views import vendorRegister
from django.urls import path

urlpatterns = [
    path('vendorRegister/', views.vendorRegister, name="vendorRegister"),

 ]