from dataclasses import field, fields
from rest_framework import serializers
from .models import Category, City, District,SubCategory,Turf,Vendor


class VendorRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ['first_name','last_name','email','phone_number','password','confirm_password','turf_name','district','city','turf_address','description','id']
        extra_kwargs ={
            'password':{'write_only':True},
            'confirm_password':{'write_only':True}
        }

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['category_name','slug','description','cat_image','id']


class SubcategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = '__all__'


class DistrictSerializer(serializers.ModelSerializer):
    class Meta:
        model = District
        fields = '__all__'

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'


class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = '__all__'
        

class TurfSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turf
        fields = '__all__'
        #['turf_name','slug','size','description','price','image','image1','image2','image3','id']
        #,'category','SubCategory','district','city','is_available'
        