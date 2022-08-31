from . import views
from django.urls import path

urlpatterns = [
    path('Activetvendor/<int:id>/', views.ActivetVendor, name="Activetvendor"),
    
    
 ]