FROM python:3.9-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    libpq-dev gcc && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY server/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY server ./

RUN python manage.py migrate

EXPOSE 8009

CMD ["python", "manage.py", "runserver", "0.0.0.0:8009"]
