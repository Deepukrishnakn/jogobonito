from . import views
from .views import LoginVenndorView, VendorAPIView,VendorLogoutAPIView,VendorForgotAPIV
from django.urls import path
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings

router=DefaultRouter()
# router.register('turfviewset',TurfViewSet, basename='turf')
router.register('category',views.CategoryViewSet,basename="category")
router.register('district',views.DistrictViewset,basename="district")
router.register('city',views.CityViewset,basename="city")
router.register('subcate',views.SubcategoryViewset,basename="subcate")
router.register('Turfall',views.TurfViewset,basename="Turfall")
router.register('Slotall',views.SlotallViewset,basename="Slotall")
router.register('Allvendor',views.AllvendorViewset,basename="Allvendor")

urlpatterns = [
    path('vendorRegister/', views.vendorRegister, name="vendorRegister"),
    path('vendorforgotpassword/',VendorForgotAPIV.as_view(),name='vendorforgotpassword'),
    path('postturf/', views.addTurf,name='postturf'),
    path('turfviewset/', views.TurfView,name='turfviewset'),
    path('vendorlogin/',LoginVenndorView.as_view(),name='vendorlogin'),
    path('Vendorlogout/',VendorLogoutAPIView.as_view()),
    path('vendor/',VendorAPIView.as_view(),name='vendor'),
    path('Turf_details/<slug:category_slug>/<slug:turf_slug>/', views.Turf_details, name="Turf_details"),
    path('turfs/<slug:category_slug>/',views.Turfs,name='turfs'),
    path('Turfs_District/<int:id>/',views.Turfs_District,name='Turfs_District'),
    path('Turfs_City/<int:id>/',views.Turfs_City,name='Turfs_City'),
    path('GetSlot/<int:id>/',views.GetSlot,name='GetSlot'),
    path('Get_all_Slot/<int:id>/',views.Get_all_Slot,name='Get_all_Slot'),
    path('addSlot/',views.addSlot,name='addSlot'),
    path('turf_view_by_vendor/',views.turf_view_by_vendor,name='turf_view_by_vendor'),
    # path('editvendor/<int:id>/',views.VendorEdit,name='editvendor'),
    path('editslot/<int:id>/',views.editslot,name='editslot'),

 ]+router.urls 
 