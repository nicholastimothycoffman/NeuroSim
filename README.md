# NeuroSim: Cognitive-AI Parallel Visualization System

NeuroSim is an interactive full-stack project that simulates and visualizes the effects of various cognitive states (e.g., stress, fatigue, flow) on the human brain alongside their technological analogs in artificial intelligence systems.


## Functionality

• Visualizes lateral and medial views of the human brain with dynamically highlighted regions.
• Displays a modular AI system diagram that mirrors brain functionality (e.g., attention, memory, control).
• Simulates backend AI behavior under different states (e.g., overloading for stress, model drift for fatigue).
• Creates an interactive, side-by-side experience where changes in one domain reflect in the other.


## Human Brain <> AI System Mapping

| Brain Region		| Cognitive Role	| AI Equivalent				|
|-----------------------|-----------------------|---------------------------------------|
| Prefrontal Cortex	| Executive Control	| Control Logic / Planning Module	|
| Hippocampus		| Memory		| Vector DB / Embedding Store		|
| Amygdala		| Emotion / Salience	| Attention Mechanism / Gating		|
| Motor Cortex		| Action / Execution	| Output Layer / Actuator		|
| Sensory Cortex	| Perception		| Input Layer / Camera, Microphone	|
| Anterior Cingulate	| Conflict Monitoring	| RL Feedback / Instability Detector	|


## Technology

### Frontend
• `React.js` with `Vite`
• `Tailwind CSS` for styling
• `DS.js`, `Three.js`, or `React-Flow` for diagrams
• `Framer Motion` for animations

### Backend
• `FastAPI` Python server
• Simulated AI models using `PyTorch`, `FAISS`, `transformers`, `Stable-Baselines3`
• REST API for frontend integration

### Deployment
• Frontend: `Vercel` or `Netlify`
• Backend: `Render`, `Railway`, or `DigitalOcean`
• Containerized via `Docker`


## To Begin

1. Clone the Repo
```bash
git clone https://github.com/nicholastimothycoffman/NeuroSim.git
cd NeuroSim

2. Setup Backend (Python 3.10+)
```bash
cd backend
python -m venv NeuroSim
source NeuroSim/bin/activate
pip install -r ../requirements.txt
uvicorn main:app --reload

3. Setup Frontend
```bash
cd frontend
npm install
npm run dev

(Frontend should be live at http://localhost:5173
(Backend runs at http://localhost:8000


## Directory Structure

See `project_structure.txt` for full layout of all directories


## Documentation

• `docs/architecture.md`	- System Design
• `docs/api.md`			- Backend Routes
• `docs/cognitive_mappings.md`	- Brain-to-AI state logic
• `docs/frontend.md`		- Component Hierarchy


## Future Features

• Time-evolving cognitive state playback
• User-defined composite states (e.g., "Sleep Deprivation + Caffeine")
• Real transformer attention map visualization
• Export diagrams as PDFs for academic/research use	


