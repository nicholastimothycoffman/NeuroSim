from fastapi import FastAPI
from pydantic import BaseModel
import openai
import faiss
import chormadb
import pinecone
from application.routes import router

app = FastAPI()

# Include the router from application/routes.py
app.include_router(router)

# Define Pydantic models
class Query(BaseModel):
	text: str

# Initialize APIs and models
openai.api_key = "openai_api_key"
pinecone.init(api_key="pinecone_api_key")

@app.post("/generate")
async def generate_response(query: Query):
	response = openai.Completion.create(
		engine="text-davinci-003",
		prompt=query.text,
		max_tokens=100
	)
	return {"response": response.choices[0].text.strip()}

# More routes and functionalities to come

if __name__ == "__main__":
	import uvicorn
	uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
