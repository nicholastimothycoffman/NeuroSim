from fastapi import APIRouter
from pydantic import BaseModel
from simulation import simulate_brain_activity
from utils import generate_openai_response, retrieve_documents

class Query(BaseModel):
	text: str

router = APIRouter()

@router.post("/generate")
async def generate_response(query: Query):
	response = generate_openai_response(query.text)
	return {"response": response}

@router.post("/simulation")
async def run_simulation(query: Query):
	data = query.dict()
	result = simulate_brain_activity(data)
	return result

@router.post("/retrieve")
async def retrieve(query: Query):
	documents = retrieve_documents(query.text)
	return {"documents": documents}
