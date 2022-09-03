import datetime
import email
from unicodedata import category
from django.contrib.auth.hashers import check_password
from rest_framework import status,exceptions
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404

from .serializers import VendorRegisterSerializer,TurfSerializer,CategorySerializer
from django.contrib.auth.hashers import make_password
from .models import VendorToken,Vendor,Turf,Category
from .authentication import create_access_token,create_refresh_token, VendorAuthentication
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination  import LimitOffsetPagination

# Create your views here.

# class TurfViewPagination(LimitOffsetPagination):
#     default_limit = 1
#     max_limit = 12



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

@api_view(['GET'])
def category_view(request,slug):
    category = Category.objects.all()
    serializer = CategorySerializer(category, many=True)
    return Response(serializer.data)
    
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class TurfViewSet(viewsets.ModelViewSet):
    queryset = Turf.objects.all()
    serializer_class = TurfSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter)
    filter_fields = ('slug','turf_name')
    search_fields = ('slug','turf_name')
    # pagination_class = TurfViewPagination


# @api_view(['GET'])
# def TurfView(request,category_slug=None):
#     categories = None
#     print(category_slug)
#     turf = None

#     if  category_slug != None:
#         categories = get_object_or_404(Category,slug=category_slug)
#         serializer = Turf.objects.filter(category=categories, is_available=True)
#     else:
#         turf = Turf.objects.all()
#         serializer = TurfSerializer(turf, many=True)
#     return Response(serializer.data)

    




    