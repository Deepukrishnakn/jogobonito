from . import views
from .views import LoginVenndorView, VendorAPIView,TurfViewSet
from django.urls import path
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register(

    'turfviewset',TurfViewSet, basename='turf'
)
router.register(r'category',views.CategoryViewSet,basename="category")

urlpatterns = [
    path('vendorRegister/', views.vendorRegister, name="vendorRegister"),
    path('vendorlogin/',LoginVenndorView.as_view(),name='vendorlogin'),
    path('vendor/',VendorAPIView.as_view(),name='vendor'),
    path('category_view/<str:slug>/', views.category_view, name="category_view"),
    # path('TurfView/<str:slug>/', views.TurfView, name="TurfView"),
 ]+router.urls

 