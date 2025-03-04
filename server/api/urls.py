from django.urls import path
from .views import ConsultationView

urlpatterns = [
    path('', ConsultationView.as_view(), name='consultation'),
]
