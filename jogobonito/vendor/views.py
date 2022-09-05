import datetime
from email.mime import image
from django.contrib import auth
from django.contrib.auth.hashers import check_password
from rest_framework import status,exceptions
from rest_framework.decorators import api_view,authentication_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
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
            # image=data['image'],
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
            response = Response()
            response.data={
                'message':'Email Inncorect'
            }
            return response 

        if  not check_password(password, passwords) :
            response = Response()
            response.data={
               'message':'Password Inncorect'
            }
            return response  

        # vendor = auth.authenticate(email=email, password=password)      
        if Vendor.is_active:
            access_token = create_access_token(vendor.id)
            refresh_token = create_refresh_token(vendor.id)
            print("ooooo")
            VendorToken.objects.create(
                vendor_id = vendor.id,
                token= refresh_token,
                expired_at =  datetime.datetime.utcnow()+datetime.timedelta(seconds=7),
            )
            response = Response()
            response.set_cookie(key='refresh_token',value=refresh_token, httponly=True)
            response.data = {
                'token': access_token,
                # 'refreshToken': refresh_token,
            }
            return response   
        else:
            response = Response()
            response.data={
                'message':'Your Not a Vendor'
            }
            return response  



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

    # def post(self, request, *args, **kwargs):
    #     turf_name = request.data['turf_name']
    #     slug = request.data['slug']
    #     size = request.data['size']
    #     description = request.data['description']
    #     price = request.data['price']
    #     image = request.data['image']
    #     image1 = request.data['image1']
    #     image2 = request.data['image2']
    #     image3 = request.data['image3']

    #     Turf.objects.create(turf_name=turf_name,
    #                         slug=slug,
    #                         size=size,
    #                         description=description,
    #                         price=price,
    #                         image=image,
    #                         image1=image1,
    #                         image2=image2,
    #                         image3=image3
    #                         )
    #     response = Response()
    #     response.data={
    #         'message':'Turf created successfuly'
    #     }
    #     return response  

@api_view(['POST'])
# @authentication_classes([VendorAuthentication])
def addTurf(request):

    data = request.data
    print(data)
    try:
        print('its ok')
        turfs = Turf.objects.create(
            turf_name = request.data['turf_name'],
            slug = request.data['slug'],
            size = request.data['size'],
            description = request.data['description'],
            price = request.data['price'],
            image = request.FILES['image'],
            image1 = request.FILES['image1'],
            image2 = request.FILES['image2'],
            image3 = request.FILES['image3'],
            category_id = request.data['category'],
            SubCategory_id = request.data['SubCategory'],
            district_id = request.data['district'],
            city_id = request.data['city'],
            is_available = request.data['is_available'],
        )

        serializer = TurfSerializer(turfs,many=False)
        message = {'detail':'turf posted Successfuly'}
        return Response(serializer.data)
    except :
        message = {'detail':'something weong!'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
                


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



    




    