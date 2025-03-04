import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
import json
from .models import Message

@csrf_exempt
def chat_with_bot(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_message = data.get('message', '')

        if not user_message:
            return JsonResponse({'error': 'Message is required'}, status=400)

        api_url = "https://api.openai.com/v1/chat/completions"
        headers = {
            "Authorization": f"Bearer {settings.OPENAI_API_KEY}",
            "Content-Type": "application/json",
        }
        payload = {
            "model": "gpt-4",
            "messages": [
                {"role": "system", "content": "Ты бот компании, который отвечает на вопросы по логистике."},
                {"role": "user", "content": user_message},
            ],
        }

        try:
            response = requests.post(api_url, headers=headers, json=payload)
            response_data = response.json()
            bot_response = response_data['choices'][0]['message']['content']

            return JsonResponse({'response': bot_response})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
