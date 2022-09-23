import datetime
from django.contrib.auth.hashers import check_password
from rest_framework import status,exceptions
from rest_framework.decorators import api_view,authentication_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from django.shortcuts import get_object_or_404
from django.contrib import messages,auth
from django.core.mail import send_mail
from accounts.authentication import JWTAuthentication
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode,urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import EmailMessage
from django.shortcuts import render

from .serializers import CitySerializer, DistrictSerializer, SlotEditSerializer, SlotSerializer, SubcategorySerializer, TurfEditSerializer, VendorEditSerializer, VendorRegisterSerializer,TurfSerializer,CategorySerializer
from django.contrib.auth.hashers import make_password
from .models import City, District, SubCategory, TurfSlot, VendorToken,Vendor,Turf,Category
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

        send_mail('Hello  ',
                'Thank You For Join with Jogobonito ,Your Application is underprocess ',
                'deepukrishna25@gmail.com'
                ,[vendor.email]   
                ,fail_silently=False)
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
        if vendor.is_active:
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


class VendorForgotAPIV(APIView):
    def post(self,request):
        data = request.data
        print(data)
        email = data['email']
        # if Registrationz.objects.filter(email=email).exists():
        vendor = Vendor.objects.filter(email=email).first()
        print(vendor)

        #reset password mail

        current_site = get_current_site(request)
        print(current_site)
        mail_subject = 'Reset Your Password'
        message = render_to_string('vendorz/reset.html', {
            'vendor': vendor,
            'domain': current_site,
            'uid': urlsafe_base64_encode(force_bytes(vendor.id)),
            'token': default_token_generator.make_token(vendor),
        })
        to_email = email
        send_email = EmailMessage(mail_subject,message,to=[to_email])
        send_email.send()

        message={f'detail':'email sented to  {email}'}
        return Response(message,status=status.HTTP_200_OK)

    
class VendorLogoutAPIView(APIView):
    def post(self, request):
        refresh_token=request.COOKIES.get('refresh_token')
        VendorToken.objects.filter(token=refresh_token).delete()
        response = Response()
        response.delete_cookie(key='refresh_token')
        response.data={
            'message':'logout'
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


# @api_view(['PATCH'])
# @authentication_classes([VendorAuthentication])
# def VendorEdit(request,id):
#     try:
#         user=Vendor.objects.get(id=id)
#         edit=VendorEditSerializer(instance=user,data=request.data)
#         if edit.is_valid():
#             edit.save()
#         return Response(edit.data)
#     except:
#         response=Response()
#         response.data={
#             'message':'somthing Wrong '
#         }
#         return response  

# vendor CRUD operations ............
class AllvendorViewset(viewsets.ModelViewSet):
    queryset = Vendor.objects.all()
    serializer_class = VendorRegisterSerializer


@api_view(['GET'])
def Turfs(request,category_slug):
    categories = None
    turf = None
    try:
        if category_slug is not None:
            categories=Category.objects.get(slug = category_slug)
            print(categories)
            turf = Turf.objects.filter(category=categories)
            serializer = TurfSerializer(turf ,many=True)
            return Response(serializer.data) 
        else:
            turf = Turf.objects.all()
            serializer = TurfSerializer(turf ,many=True)
            return Response(serializer.data) 

    except:
        turf = Turf.objects.all()
        message = {'detail':'Turf is not available'}

        return Response(message,status=status.HTTP_400_BAD_REQUEST) 


@api_view(['GET'])
def Turfs_District(request,id):
    try:        
        district=District.objects.get(id=id)
        print(district)
        job=Turf.objects.filter(district=district,is_available=True)
        serializer=TurfSerializer(job,many=True)
        return Response(serializer.data)
    except:
        turf = Turf.objects.all()
        message = {'detail':'Turf is not available'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST) 


@api_view(['GET'])
def Turfs_City(request,id):
    try:        
        city=City.objects.get(id=id)
        print(city)
        job=Turf.objects.filter(city=city,is_available=True)
        serializer=TurfSerializer(job,many=True)
        return Response(serializer.data)
    except:
        turf = Turf.objects.all()
        message = {'detail':'Turf is not available'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST) 


@api_view(['GET'])
def Turf_details(request,category_slug,turf_slug):
    try:
        single_turf = Turf.objects.get(category__slug=category_slug,slug=turf_slug)
        serializer = TurfSerializer(single_turf ,many=False)
        return Response(serializer.data) 
    except:
        message = {'detail':'Turf is not available'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST) 

@api_view(['GET'])
def TurfView(request):
    try:
        turf = Turf.objects.all()
        serializer = TurfSerializer(turf ,many=True)
        return Response(serializer.data) 
    except:
        message = {'detail':'Turf is not available'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST) 
    
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# class TurfViewSet(viewsets.ModelViewSet):
#     queryset = Turf.objects.all().filter(is_available=True)
#     serializer_class = TurfSerializer
#     filter_backends = (DjangoFilterBackend, SearchFilter)
#     filter_fields = ('slug','turf_name')
#     search_fields = ('slug','turf_name')
    # pagination_class = TurfViewPagination



@api_view(['POST'])
@authentication_classes([VendorAuthentication])
def addTurf(request):

    data = request.data
    print(data)
    try:
        print('its add turf')
        print(request.user)
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
            vendor = request.user,
            is_available = request.data['is_available']
        )

        serializer = TurfSerializer(turfs,many=False)
        message = {'detail':'turf posted Successfuly'}
        return Response(serializer.data)
    except :
        message = {'detail':'something weong!'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

                
class DistrictViewset(viewsets.ModelViewSet):
    queryset = District.objects.all()
    serializer_class = DistrictSerializer


class CityViewset(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer


class SubcategoryViewset(viewsets.ModelViewSet):
    queryset = SubCategory.objects.all()
    serializer_class = SubcategorySerializer
    
@authentication_classes([VendorAuthentication])
class TurfViewset(viewsets.ModelViewSet):
    queryset = Turf.objects.all()
    serializer_class = TurfSerializer

@authentication_classes([VendorAuthentication])
class SlotallViewset(viewsets.ModelViewSet):
    queryset = TurfSlot.objects.all()
    serializer_class = SlotSerializer


@api_view(['POST'])
@authentication_classes([VendorAuthentication])
def addSlot(request):
    data = request.data
    print(data)
    try:
        print('its add slot')
        print(request.user)
        slots = TurfSlot.objects.create(
            Date = request.data['Date'],
            Time = request.data['Time'],
            Slot_No = request.data['Slot_No'],
            turf_id = request.data['turf_id'],
            is_available = request.data['is_available'],
            vendor = request.user
        )

        serializer = SlotSerializer(slots,many=False)
        message = {'detail':'Slot posted Successfuly'}
        return Response(serializer.data)
    except :
        message = {'detail':'something weong!'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@authentication_classes([JWTAuthentication])
def GetSlot(request,id):
    try:
        now = datetime.datetime.now()
        turf = Turf.objects.get(id=id)
        slot = TurfSlot.objects.filter(turf=turf,Date__gte=now,Time__gte=now)
        serializer = SlotSerializer(slot,many=True)
        return Response(serializer.data)
    except:
        message = {'detail':'Sloat is not available'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST) 


@api_view(['GET'])
@authentication_classes([VendorAuthentication])
def turf_view_by_vendor(request):
    try:
        vendor = request.user
        turf = Turf.objects.filter(vendor=vendor)
        serializer = TurfSerializer(turf,many=True)
        return Response(serializer.data)
    except:
        message = {'detail':'Sloat is not available'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST) 


# @api_view(['PATCH'])
# @authentication_classes([VendorAuthentication])
# def editturf(request,id):
#     try:
#         turf=Turf.objects.get(id=id)
#         edit=TurfEditSerializer(instance=turf,data=request.data)
#         if edit.is_valid():
#             edit.save()
#         return Response(edit.data)
#     except:
#         response=Response()
#         response.data={
#             'message':'somthing Wrong '
#         }
#         return response  



@api_view(['PATCH'])
@authentication_classes([VendorAuthentication])
def editslot(request,id):
    try:
        slot=TurfSlot.objects.get(id=id)
        edit=SlotEditSerializer(instance=slot,data=request.data)
        if edit.is_valid():
            edit.save()
        return Response(edit.data)
    except:
        response=Response()
        response.data={
            'message':'somthing Wrong '
        }
        return response  


@api_view(['GET'])
@authentication_classes([VendorAuthentication])
def Get_all_Slot(request,id):
    try:
        turf = Turf.objects.get(id=id)
        slot = TurfSlot.objects.filter(turf=turf)
        serializer = SlotSerializer(slot,many=True)
        return Response(serializer.data)
    except:
        message = {'detail':'Sloat is not available'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST) 
    




    