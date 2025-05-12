from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

# CORS for frontend connection
app.add_middleware(
	CORSMiddleware,
	allow_origins=["*"],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

@app.get("/api/state/{state_name}")
def get_state(state_name: str):
	try:
		with open(f"backend/data/{state_name}.json") as f:
			return json.load(f)
	except FileNotFoundError:
		return {"error": f"State '{state_name}' not found in backend/data"}
