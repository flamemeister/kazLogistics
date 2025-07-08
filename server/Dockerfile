FROM python:3.9-slim

WORKDIR /app

COPY server/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY server ./

RUN python manage.py migrate

EXPOSE 8009

CMD ["python", "manage.py", "runserver", "0.0.0.0:8009"]
