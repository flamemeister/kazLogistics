from rest_framework import serializers

class ConsultationSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    phone = serializers.CharField(max_length=15)
    email = serializers.EmailField()
    comment = serializers.CharField(required=False, allow_blank=True)
