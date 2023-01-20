'''
This is the root router.
It is called to check if the server is running.
'''

from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_root():
    return {"message": "server is running..."}