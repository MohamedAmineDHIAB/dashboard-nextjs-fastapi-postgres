from pydantic import BaseSettings


class Settings(BaseSettings):
    """Parameters to be loaded from Environment Variables in .env file"""

    BACKEND_APP_TITLE: str = "Employees Dashboard Backend"
    BACKEND_APP_VERSION: str = "0.1.0"
    SQLALCHEMY_DATABASE_URL: str = "postgresql://postgres:postgres@db:5432/python_db"

    class Config:
        env_file = ".env"