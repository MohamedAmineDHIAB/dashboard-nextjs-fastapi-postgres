FROM tiangolo/uvicorn-gunicorn-fastapi:latest
WORKDIR /app/server

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

