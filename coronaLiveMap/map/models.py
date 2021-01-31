from django.db import models
import requests

# Create your models here.

# Corona API Class Definition

def fetchApi():
    datas = []
    response = requests.get('https://api.kawalcorona.com/indonesia/provinsi/')
    db = response.json()

    for d in db:
        data = CoronaApi(d['attributes']['Provinsi'],d['attributes']['Kasus_Posi'])
        datas.append(data)
    return datas

class CoronaApi:
    def __init__(self, provinsi, kasus):
        self.provinsi = provinsi
        self.kasus = kasus