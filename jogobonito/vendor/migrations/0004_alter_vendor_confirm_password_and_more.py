# Generated by Django 4.1 on 2022-08-29 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vendor', '0003_remove_vendor_price_vendor_confirm_password_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vendor',
            name='confirm_password',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='description',
            field=models.TextField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='password',
            field=models.CharField(max_length=255),
        ),
    ]
