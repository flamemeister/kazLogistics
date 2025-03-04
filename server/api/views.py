from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ConsultationSerializer
import datetime

class ConsultationView(APIView):
    def post(self, request):
        serializer = ConsultationSerializer(data=request.data)
        if serializer.is_valid():
            # Получение данных из формы
            name = serializer.validated_data['name']
            phone = serializer.validated_data['phone']
            email = serializer.validated_data['email']
            comment = serializer.validated_data.get('comment', '')

            # Отправка письма администратору
            admin_html_content = render_to_string('email/admin_notification.html', {
                'name': name,
                'phone': phone,
                'email': email,
                'comment': comment,
                'year': datetime.datetime.now().year,
            })

            admin_subject = 'Новая заявка на консультацию'
            admin_from_email = 'info@gslog.kz'  # Отправитель
            admin_recipient_list = ['info@gslog.kz']  # Email администратора
            admin_msg = EmailMultiAlternatives(admin_subject, '', admin_from_email, admin_recipient_list)
            admin_msg.attach_alternative(admin_html_content, "text/html")
            admin_msg.send()

            # Отправка письма пользователю
            user_html_content = render_to_string('email/consultation_email.html', {
                'name': name,
                'phone': phone,
                'email': email,
                'comment': comment,
            })

            user_subject = 'Спасибо за вашу заявку'
            user_from_email = 'info@gslog.kz'  # Отправитель
            user_recipient_list = [email]  # Email пользователя
            user_msg = EmailMultiAlternatives(user_subject, '', user_from_email, user_recipient_list)
            user_msg.attach_alternative(user_html_content, "text/html")
            user_msg.send()

            # Ответ клиенту
            return Response({"message": "Спасибо за вашу заявку! Мы с вами свяжемся."}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
