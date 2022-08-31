from . import views
from .views import VendorLoginAPIView
from django.urls import path

urlpatterns = [
    path('Activetvendor/<int:id>/', views.ActivetVendor, name="Activetvendor"),
    path('vendorlogin/',VendorLoginAPIView.as_view(),name='vendorlogin'),
    
 ]