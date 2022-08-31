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


class VendorLoginAPIView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = Vendor.objects.filter(email=email).first()

        if user is None:
            response = Response()
           
            response.data={
                'message':'Invalid email'
            }
            return response        
            raise exceptions.AuthenticationFailed('Invalid email')

        if not user.check_password(password):
            response = Response()
           
            response.data={
                'message':'invalid password'
            }
            return response        
            raise exceptions.AuthenticationFailed('Invalid password')

        user = auth.authenticate(email=email, password=password)
        if user:
            access_token = create_access_token(user.id)
            refresh_token = create_refresh_token(user.id)

            UserToken.objects.create(
                user_id=user.id,
                token=refresh_token,
                expired_at=datetime.datetime.utcnow() + datetime.timedelta(days=7)
            )

            response = Response()
            response.set_cookie(key='refresh_token',value=refresh_token,httponly=True)
            response.data = {
                'token': access_token
            }
            return response
        else:
            message = {'detail':'Not verifyd'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def ActivetVendor(request, id):
    edit = Vendor.objects.get(id=id)
    change = VendorActivatSerializer(instance=edit, data=request.data)
    if change.is_valid():
        change.save()
    return Response(change.data)