'''
This module contains the database schema for the application
'''

from pydantic import BaseModel


class EmployeeBase(BaseModel):
    first_name : str
    last_name : str
    department_id : int
    class Config:
        orm_mode = True

class Employee(EmployeeBase):
    id: int

class DepartmentBase(BaseModel):
    department_name : str
    class Config:
        orm_mode = True

class Department(DepartmentBase):
    id: int



