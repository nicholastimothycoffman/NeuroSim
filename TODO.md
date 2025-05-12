# NeuroSim TODO

## Completed
- [x] Verified that backend `/api/state/{state_name}` is functioning correctly
- [x] Confirmed frontend `App.jsx` fetches state data and passes it to diagram components
- [x] Established and documented the expected JSON format (`regions` + `ai_modules`)
- [x] Created 29 example cognitive state `.json` files using a utility script
- [x] Implemented `generate_cognitive_states.py` to automate state data creation

## In Progress
- [ ] Fix logic in `<BrainDiagram>` and `<AISystemDiagram>` components to correctly render incoming data
- [ ] Add graceful handling for loading states or invalid state data (e.g. show "Loading..." or "State not found")

## Next Steps
- [ ] Add visual representation (SVG, Canvas, or D3.js) for brain regions in `BrainDiagram.jsx`
- [ ] Add modular block representation for AI system in `AISystemDiagram.jsx`
- [ ] Animate transitions between cognitive states (e.g. fading regions, animated modules)
- [ ] Integrate `StateSelector` dropdown with the full list of cognitive states
- [ ] Add metadata descriptions for each cognitive state (optional, for UI tooltips)

---

**Current Status**:  
Data is confirmed to load from backend → frontend, but visual rendering logic in diagram components needs debugging or implementation.

