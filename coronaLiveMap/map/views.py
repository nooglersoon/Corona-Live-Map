from django.shortcuts import render
from django.http import HttpResponse

from .models import CoronaApi,fetchApi

# Create your views here.



def index(request):
    data = fetchApi()
    return render(request,'index.html',{'data':data})