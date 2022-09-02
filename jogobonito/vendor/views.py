import datetime
import email
from django.contrib.auth.hashers import check_password
from rest_framework import status,exceptions
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view

from .serializers import VendorRegisterSerializer
from django.contrib.auth.hashers import make_password
from .models import VendorToken,Vendor 
from .authentication import create_access_token,create_refresh_token, VendorAuthentication
from rest_framework import generics


# Create your views here.

@api_view(['POST'])
def vendorRegister(request):
    data = request.data
    print(data)
    try:
        print('its ok')
        vendor = Vendor.objects.create(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'],
            phone_number=data['phone_number'],
            password=make_password(data['password']),
            confirm_password=data['confirm_password'],
            turf_name=make_password(data['turf_name']),
            district=data['district'],
            city=data['city'],
            turf_address=data['turf_address'],
            description=data['description'],
            image=data['image'],
        )

        serializer = VendorRegisterSerializer(vendor,many=False)
        message = {'detail':'vendor Registration send Successfuly'}
        return Response(serializer.data)
    except :
        message = {'detail':'vendor with this email already exist'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


class LoginVenndorView(APIView):
    def post(self,request):
        
        email = request.data['email']
        password = request.data['password']
        vendor = Vendor.objects.filter(email=email).first()
        passwords =vendor.password
        if vendor is None:
            raise exceptions.AuthenticationFailed ('No Vendor available')
        if  not check_password(password, passwords) :
            raise exceptions.AuthenticationFailed ('Password Inncorect')
        # vendor = authenticate(email=email, password=password)      
        if Vendor.is_Vendor:
            access_token = create_access_token(vendor.id)
            refresh_token = create_refresh_token(vendor.id)
            print("hellooo")
            VendorToken.objects.create(
                vendor_id = vendor.id,
                token= refresh_token,
                expired_at =  datetime.datetime.utcnow()+datetime.timedelta(seconds=7),
            )
            response = Response()
            response.set_cookie(key='refresh_token',
                                value=refresh_token, httponly=True)
            response.data = {
                'token': access_token,
                # 'refreshToken': refresh_token,
            }
            return  response   
        else:
            raise exceptions.AuthenticationFailed ('You are not a Vendor')


class VendorAPIView(APIView):
    authentication_classes = [VendorAuthentication]
        
    def get(self, request):
        print('kittiyoo')
        user=request.user
        users=Vendor.objects.get(email=user.email)
        serializer=VendorRegisterSerializer(users,many=False)
        return Response(serializer.data)





    