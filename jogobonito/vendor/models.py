from django.db import models
# Create your models here.


class Vendor(models.Model):
    first_name     = models.CharField(max_length=100)
    last_name      = models.CharField(max_length=100)
    email          = models.CharField(max_length=100, unique=True)
    phone_number   = models.CharField(max_length=100,unique=True)
    password       = models.CharField(max_length=255)
    confirm_password= models.CharField(max_length=255)
    turf_name      = models.CharField(max_length=200)
    district       = models.CharField(max_length=200)
    city           = models.CharField(max_length=200)
    turf_address   = models.TextField(max_length=200)
    description    = models.TextField(max_length=255, blank=True)
    image          = models.ImageField(upload_to='photos/products')
    create_date    = models.DateTimeField(auto_now_add=True)
    modified_date  = models.DateTimeField(auto_now=True)
    is_Vendor      = models.BooleanField(default=True)
    is_active      = models.BooleanField(default=False)
    
    def __str__(self):
        return self.email


class VendorToken(models.Model):
    vendor_id = models.IntegerField()
    token = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    expired_at = models.DateTimeField()

