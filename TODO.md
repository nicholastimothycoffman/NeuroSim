# NeuroSim TODO

## ✅ Completed
- [x] Verified that backend `/api/state/{state_name}` is functioning correctly
- [x] Confirmed frontend `App.jsx` fetches state data and passes it to diagram components
- [x] Established and documented the expected JSON format (`regions` + `ai_modules`)
- [x] Created 29 example cognitive state `.json` files using a utility script
- [x] Implemented `generate_cognitive_states.py` to automate state data creation
- [x] Fixed logic in `<BrainDiagram>` and `<AISystemDiagram>` components to correctly render incoming data
- [x] Added graceful handling for loading states or invalid state data (e.g. fallback text)
- [x] Integrated `StateSelector` dropdown with the full list of cognitive states
- [x] Defined long-term visual layout plan (brain: lateral/medial; AI: 5-fold representation)
- [x] Scaffolded `BrainDiagram/` subcomponents: `LateralView`, `MedialView`, and wrapper
- [x] Scaffolded `AISystemDiagram/` with five placeholder components for alternate visual representations
- [x] Repaired and verified correct frontend file layout (`index.html`, `main.jsx`)
- [x] Confirmed frontend is rendering basic elements (text, `StateSelector`, `BrainDiagram`)
- [x] Isolated and resolved `AISystemDiagram` render issue
- [x] Validated all five AI diagram views render correctly with mocked data

## 🔧 In Progress
- [ ] Prepare to replace placeholder SVGs with meaningful dynamic render logic (AI + brain)
- [ ] Define interactivity design pattern (e.g. hover → tooltip, click → detail view)

## 🔜 Next Steps
- [ ] Implement SVG-based lateral brain visualization in `LateralView.jsx`
- [ ] Implement SVG-based medial brain visualization in `MedialView.jsx`
- [ ] Animate transitions between cognitive states (e.g. fading regions, animated modules)
- [ ] Add metadata descriptions for each cognitive state (optional, for UI tooltips)
- [ ] Optionally expose `/api/states` endpoint to dynamically list available brain states
- [ ] Add layout wrapper to display human brain and AI system side-by-side cleanly

---

**Current Status**:  
Frontend and backend are both fully operational. Five modular AI diagrams are rendering as expected. Development focus now shifts to building SVG-based brain views and enhancing interactivity.

