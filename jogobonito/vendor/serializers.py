from dataclasses import field, fields
from rest_framework import serializers
from .models import Category,SubCategory,Turf,Vendor


class VendorRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ['first_name','last_name','email','phone_number','password','confirm_password','turf_name','district','city','turf_address','description']
        extra_kwargs ={
            'password':{'write_only':True},
            'confirm_password':{'write_only':True}
        }

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['category_name','slug','description','cat_image']


class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = ['name','slug','category']

class TurfSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turf
        fields = ['turf_name','slug','size','description','price','image','image1','image2','image3']
        #,'category','SubCategory','district','city','is_available'
        