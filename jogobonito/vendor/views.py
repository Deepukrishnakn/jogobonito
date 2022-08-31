from django.shortcuts import render
import datetime
from rest_framework import status,exceptions
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from .models import Vendor
from .serializers import VendorRegisterSerializer

# Create your views here.

@api_view(['POST'])
def vendorRegister(request):
    data = request.data
    print(data)
    try:
        print('rajaaaa')
        vendor = Vendor.objects.create(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'],
            phone_number=data['phone_number'],
            password=make_password(data['password']),
            confirm_password=data['confirm_password'],
            turf_name=data['turf_name'],
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