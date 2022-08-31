from . import views
from .views import LoginVenndorView,VendorAPIView
from django.urls import path

urlpatterns = [
    path('vendorRegister/', views.vendorRegister, name="vendorRegister"),
    path('vendorlogin/',LoginVenndorView.as_view(),name='vendorlogin'),
    path('vendorView/',VendorAPIView.as_view(),name='vendorlogin'),

 ]