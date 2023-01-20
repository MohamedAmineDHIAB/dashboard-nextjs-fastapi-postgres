'''
Department router containing the following endpoints:
GET /departments - get all departments
POST /department - create a new department
'''
from fastapi import APIRouter, Depends
from db.base import get_db
from db.schema import Department, DepartmentBase
import api.utils as utils
from typing import List

department_router = APIRouter()

@department_router.get("/departments",response_model=List[Department])
def get_departments(db=Depends(get_db)):
    return utils.get_departments(db)

@department_router.post("/department",response_model=Department)
def create_department(department: DepartmentBase, db=Depends(get_db)):
    return utils.create_department(db, department)