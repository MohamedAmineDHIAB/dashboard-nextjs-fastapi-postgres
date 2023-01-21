FROM tiangolo/uvicorn-gunicorn-fastapi:latest
WORKDIR /app/server

COPY ./server/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY ./server/ .

