from . import views
from .views import LoginVenndorView, VendorAPIView,TurfViewSet
from django.urls import path
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings

router=DefaultRouter()
router.register('turfviewset',TurfViewSet, basename='turf')
router.register('category',views.CategoryViewSet,basename="category")
router.register('district',views.DistrictViewset,basename="district")
router.register('city',views.CityViewset,basename="city")
router.register('subcate',views.SubcategoryViewset,basename="subcate")

urlpatterns = [
    path('vendorRegister/', views.vendorRegister, name="vendorRegister"),
    path('postturf/', views.addTurf,name='postturf'),
    path('vendorlogin/',LoginVenndorView.as_view(),name='vendorlogin'),
    path('vendor/',VendorAPIView.as_view(),name='vendor'),
    path('Turf_details/<slug:category_slug>/<slug:turf_slug>/', views.Turf_details, name="Turf_details"),
    path('turfs/<slug:category_slug>/',views.Turfs,name='turfs'),
    path('Turfs_District/<int:id>/',views.Turfs_District,name='Turfs_District'),
    path('Turfs_City/<int:id>/',views.Turfs_City,name='Turfs_City'),
 
 ]+router.urls 
 
 