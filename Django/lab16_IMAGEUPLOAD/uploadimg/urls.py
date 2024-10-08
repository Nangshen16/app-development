"""
URL configuration for uploadimg project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
#include function is used to reference other URL configurations from diffferent apps or modules 
from django.urls import path,include
#import settings object, which contains all the configuration settings defined for the Django project
from django.conf import settings
#static is uded to serve static css JS and images and media files during development without settimg up a separate web server
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    #include the URL patterns from another urls.,py file, specifically the one located in the posts app
    path('', include('post.urls')),
]

#serve media files during developemnt
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)