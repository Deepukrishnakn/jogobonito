from .import views
from .views import LoginAPIView,UserAPIView,RefreshAPIView,LogoutAPIView
from django.urls import path

urlpatterns = [
    path('registeruser/', views.registeruser, name="registeruser"),
    path('otpverify/', views.VerifyOtp, name="otpverify"),
    path('login/',LoginAPIView.as_view()),
    path('user/',UserAPIView.as_view()),
    path('refresh/',RefreshAPIView.as_view(), name="refresh"),
    path('logout/',LogoutAPIView.as_view()),
    path('forgotpassword/', views.forgotpassword, name="forgotpassword"),
    path('resetpassword_validate/<uidb64>/<token>/', views.resetpassword_validate, name='resetpassword_validate'),
    
    # path('resetpassword/', views.resetpassword, name='resetpassword'),
#   path('resetpassword_validate/<uidb64>/<token>',views.resetpassword_validate,name='resetpassword_validate'),
 ]