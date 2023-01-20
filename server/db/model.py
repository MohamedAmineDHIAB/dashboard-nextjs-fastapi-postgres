'''
This module contains the database models for the application.
'''

from sqlalchemy import  Column, ForeignKey, Integer, String

from .base import Base


class Employee(Base):
    __tablename__ = "employee"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    first_name = Column(String, unique=True, index=True)
    last_name = Column(String)
    department_id = Column(Integer, ForeignKey("department.id"))


class Department(Base):
    __tablename__ = "department"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    department_name = Column(String, unique=True, index=True)