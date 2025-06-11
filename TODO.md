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
- [x] Confirmed frontend renders selector and loading UI in default state
- [x] Updated `App.jsx` to conditionally render brain and AI components only when data is loaded
- [x] Confirmed `LateralView.jsx` and `MedialView.jsx` mount without errors
- [x] Began debugging live data rendering paths using console logging
- [x] Migrated all `.json` files to use `activation` instead of `state` for `ai_modules`
- [x] Implemented `backend/utils/convert_states_format.py` to automate format migration
- [x] Updated `AISystemDiagram/index.jsx` to support `activation`-based rendering and route data to subcomponents

## 🔧 In Progress
- [ ] Ensure region name strings from JSON align with frontend `regionPositions` mapping
- [ ] Confirm final structure and completeness of each updated `.json` file
- [ ] Replace placeholder SVGs with meaningful, data-driven render logic (AI + brain)
- [ ] Define interactivity design pattern (e.g. hover → tooltip, click → detail view)

## 🔜 Next Steps
- [ ] Implement dynamic region rendering in `LateralView.jsx` (visual anatomy + activation)
- [ ] Implement dynamic region rendering in `MedialView.jsx`
- [ ] Implement visual logic for at least one `AISystemDiagram/` subcomponent (e.g. `NodeLink.jsx`)
- [ ] Validate `.json` input parsing and region matching across all states
- [ ] Animate transitions between cognitive states (e.g. fading, color morph, motion)
- [ ] Add metadata descriptions to each cognitive state (for UI tooltips or detail panels)
- [ ] Optionally expose `/api/states` endpoint to dynamically list cognitive states
- [ ] Add responsive layout wrapper for brain vs. AI system side-by-side presentation
- [ ] Centralize color logic (e.g. `getFillColor()`) into a shared utility module

---

**Current Status**:  
Frontend and backend are synchronized and stable. Cognitive state data is now standardized and loading correctly. Initial diagram rendering logic is in place. Focus is shifting to validating visual behavior from live data, implementing actual render logic in AI and brain diagram subcomponents, and preparing for interactivity and animation.

