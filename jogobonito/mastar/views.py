from datetime import datetime
from django.shortcuts import render
from django.contrib import messages,auth
from accounts.authentication import create_access_token,create_refresh_token, JWTAuthentication,decode_refresh_token
from rest_framework import status,exceptions
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from accounts.models import UserToken
from .serializer import VendorActivatSerializer
from rest_framework.response import Response
from vendor.models import Vendor

# Create your views here.

@api_view(['PUT'])
def ActivetVendor(request, id):
    edit = Vendor.objects.get(id=id)
    change = VendorActivatSerializer(instance=edit, data=request.data)
    if change.is_valid():
        change.save()
    return Response(change.data)




