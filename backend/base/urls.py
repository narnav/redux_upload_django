from django.contrib import admin
from django.urls import path

from base import views

urlpatterns = [
    path('', views.index),
    path('login', views.MyTokenObtainPairView.as_view()),
    path('register',views.register),
    # path('get_all_images', views.getImages),
    # path('upload_image/',views.APIViews.as_view()),

]
