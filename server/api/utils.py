'''
This file contains all the utility functions for the application''
'''
from sqlalchemy.orm import Session
from db import model,schema


# function to get employee by id
def get_employee_by_id(db: Session, employee_id: int):
    return db.query(model.Employee).filter(model.Employee.id == employee_id).first()

# function to get list of all employees
def get_employees(db: Session):
    return db.query(model.Employee).all()

# function to create a new employee
def create_employee(db: Session, employee: schema.EmployeeBase):
    db_employee = model.Employee(**employee.dict())
    db.add(db_employee)
    db.commit()
    db.refresh(db_employee)
    return db_employee

# function to get list of all departments
def get_departments(db: Session):
    return db.query(model.Department).all()

# function to create a new department
def create_department(db: Session, department: schema.DepartmentBase):
    if type(department) == dict:
        db_department = model.Department(**department)
    else :
        db_department = model.Department(**department.dict())
    # check if department_name already exists
    if not db.query(model.Department).filter(model.Department.department_name == db_department.department_name).first():
        db.add(db_department)
        db.commit()
        db.refresh(db_department)
        return db_department
