from fastapi import FastAPI
from db.base import SessionLocal
from api.routers import root, employee_router, department_router
from configs.settings import Settings
from db.base import  engine
from db import model
from api import utils
from fastapi.middleware.cors import CORSMiddleware

model.Base.metadata.create_all(bind=engine)

def include_routers(app: FastAPI):
    '''
    Add all routers to the FastAPI app
    :app: FastAPI app
    :return: None
    '''
    app.include_router(root.router)
    app.include_router(employee_router.employee_router)
    app.include_router(department_router.department_router)



def create_default_departments(db):
    '''
    Initialiazation of the app with 3 departments with the following (id,department_name): (1,Sales) , (2,Ops) , (3,IT)
    :db: database session
    :return: None
    '''
    departments = [
        {"department_name": "Sales"},
        {"department_name": "Ops"},
        {"department_name": "IT"},
    ]
    for department in departments:
        utils.create_department(db, department)
    return()



def create_app():
    '''
    Create the FastAPI app
    :retrun: FastAPI app
    '''
    settings=Settings()
    app = FastAPI(title=settings.BACKEND_APP_TITLE, version=settings.BACKEND_APP_VERSION)
    # allow all origins for cors
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    include_routers(app)
    return app

# Create the FastAPI app
app = create_app()
# Inject the default departments to the database
create_default_departments(SessionLocal())
