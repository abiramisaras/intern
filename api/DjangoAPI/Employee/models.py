from django.db import models

# Create your models here.


class Departments(models.Model):
    DepartmentId = models.AutoField(primary_key=True)
    DepartmentName=models.CharField(max_length=500)

class iot(models.Model):
    IdSensor=models.AutoField(primary_key=True)
    KeySensor=models.CharField(max_length=500)
    Humidity=models.CharField(max_length=500)
    Temp=models.CharField(max_length=500)
