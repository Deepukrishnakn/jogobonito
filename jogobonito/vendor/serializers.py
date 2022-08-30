from dataclasses import field, fields
from pyexpat import model
from rest_framework import serializers
from .models import Vendor



class VendorRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ['first_name','last_name','email','phone_number','password','confirm_password','turf_name','district','city','turf_address','description','image']
        extra_kwargs ={
            'password':{'write_only':True}
        }
