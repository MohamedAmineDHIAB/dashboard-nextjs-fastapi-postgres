'''
Employee router containing the following endpoints:
GET /employees - get all employees
POST /employee - create a new employee
GET /employee/{employee_id} - get employee by id
'''
from fastapi import APIRouter, Depends, HTTPException
from db.base import get_db
from db.schema import EmployeeBase, Employee
import api.utils as utils
from typing import List

employee_router = APIRouter()

@employee_router.get("/employees", response_model=List[Employee])
def get_employees(db=Depends(get_db)):
    return utils.get_employees(db)

@employee_router.post("/employee", response_model=Employee)
def create_employee(employee: EmployeeBase, db=Depends(get_db)):
    return utils.create_employee(db, employee)

@employee_router.get("/employee/{employee_id}", response_model=Employee)
def get_employee_by_id(employee_id: int, db=Depends(get_db)):
    db_employee = utils.get_employee_by_id(db, employee_id)
    if db_employee is None:
        raise HTTPException(status_code=404, detail="Employee not found")
    return db_employee


