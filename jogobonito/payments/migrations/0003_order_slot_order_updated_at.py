# Generated by Django 4.1 on 2022-09-27 05:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('vendor', '0002_turfslot_is_booked'),
        ('payments', '0002_order_delete_razorpaypayment'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='slot',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='vendor.turfslot'),
        ),
        migrations.AddField(
            model_name='order',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]