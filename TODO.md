# NeuroSim TODO

## Completed
- Verified backend `/api/state/{state_name}` functions correctly using FastAPI  
- Implemented file path handling with `pathlib` for robust JSON loading  
- Confirmed frontend `App.jsx` fetches cognitive state data and routes to components  
- Standardized `.json` schema with `regions`, `ai_modules`, and `ai_analog`  
- Migrated all `.json` files using `convert_states_format.py`  
- Identified and curated 15 core brain states with strong AI analogs  
- Designed and documented long-term visual layout (lateral/medial brain + 5 AI views)  
- Implemented conditional rendering of `BrainDiagram` and `AISystemDiagram`  
- Created `LateralView.jsx` and `MedialView.jsx` with functional SVG rendering  
- Visualized brain region activation using color-coded circles  
- Verified end-to-end data flow from backend to dynamic SVG visuals  
- Added logging in `App.jsx`, `BrainDiagram.jsx`, and region views for live debugging  
- Implemented all 5 dynamic AI diagram components with correct prop handling:  
  - `NodeLink.jsx`  
  - `CortexSheet.jsx`  
  - `HeatmapSilhouette.jsx`  
  - `RadialConnectome.jsx`  
  - `LayeredNetwork.jsx`  
- Confirmed `BrainDiagram` is cleanly separated from AI visuals  
- Verified AI diagrams render activation-based visuals using `data.ai_modules`  

---

## Immediate Focus
- Diagnose and resolve layout bug causing all diagrams to appear on the left side  
- Redesign layout to split browser view 50/50 between brain and AI diagrams  
- Confirm Tailwind `w-1/2`, `flex`, and `overflow-hidden` behavior works as expected  
- Add temporary background colors to diagnose flexbox column boundaries  
- Validate all 7 diagrams are rendering in their respective halves (left: brain, right: AI)  
- Scale each of the 5 AI diagrams to 1/5 of right half; both brain views to 1/2 of left half  
- Refine layout, spacing, and labels for all 5 AI diagrams  
- Use Tailwind or scoped CSS to constrain SVG rendering within height bounds  
- Enhance tooltip information for AI modules (e.g. name + activation + analog note)  

---

## In Progress
- Ensure `region.name` fields align with frontend `regionPositions` mappings  
- Centralize `getFillColor()` and `normalizeName()` into shared utility module  
- Prepare fallback rendering for unknown brain regions or AI modules  
- Define consistent interactive behavior (hover tooltips, optional click handling)  
- Implement temporary outlines or debug visuals to confirm diagram boundaries  

---

## Next Steps
- Animate transitions between cognitive states (fade, color morph, motion)  
- Add metadata UI support (tooltips, overlays, expandable AI module notes)  
- Optionally expose `/api/states` endpoint to dynamically list available states  
- Add responsive layout wrapper for side-by-side brain and AI visualizations  
- Implement testing suite (unit + integration) for data pipeline and component rendering  
- Document rendering behavior, module structure, and component inputs in `docs/frontend.md`  

---

**Current Status**  
All seven diagrams (2 brain, 5 AI) are rendering based on JSON input. Component isolation, data flow, and activation-based visuals are functioning. Focus now is on finalizing the 50/50 layout split and resolving a misalignment issue causing all diagrams to render on the left side.

