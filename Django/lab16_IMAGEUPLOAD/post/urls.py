#include library from dajngo which hekps to connect from views and 
from django.urls import path

from .views import HomePageView, CreatePostView

urlpatterns = [
    path('',HomePageView.as_view(), name='home'),
    path('post', CreatePostView.as_view(), name='add_post'),
    
]
