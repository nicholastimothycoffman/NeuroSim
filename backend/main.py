from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from pathlib import Path

app = FastAPI()

# CORS for frontend
app.add_middleware(
	CORSMiddleware,
	allow_origins=["*"],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

DATA_DIR = Path(__file__).parent / "data"

@app.get("/api/state/{state_name}")
def get_state(state_name: str):
	file_path = DATA_DIR / f"{state_name}.json"
	try:
		with open(file_path) as f:
			return json.load(f)
	except FileNotFoundError:
		return {"error": f"State '{state_name}' not found in {file_path}"}

