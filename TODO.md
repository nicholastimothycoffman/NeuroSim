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
- Implemented all 5 dynamic AI diagram components:
  - `NodeLink.jsx`
  - `CortexSheet.jsx`
  - `HeatmapSilhouette.jsx`
  - `RadialConnectome.jsx`
  - `LayeredNetwork.jsx`

## Immediate Focus
- Refine layout, spacing, and labels for all 5 AI diagrams
- Validate all diagrams across all 15 cognitive states
- Normalize edge-case module names using `normalizeName()`
- Add fallback/error rendering for missing or malformed modules
- Enhance tooltip information for AI modules (e.g. name + activation + analog note)

## In Progress
- Ensure `region.name` fields align with frontend `regionPositions` mappings
- Centralize `getFillColor()` and `normalizeName()` into shared utility module
- Prepare fallback rendering for unknown brain regions or AI modules
- Define consistent interactive behavior (hover tooltips, optional click handling)

## Next Steps
- Animate transitions between cognitive states (fade, color morph, motion)
- Add metadata UI support (tooltips, overlays, expandable AI module notes)
- Optionally expose `/api/states` endpoint to dynamically list available states
- Add responsive layout wrapper for side-by-side brain and AI visualizations
- Implement testing suite (unit + integration) for data pipeline and component rendering
- Document rendering behavior, module structure, and component inputs in `docs/frontend.md`

---

**Current Status**  
Both brain and AI diagrams are now dynamically rendered based on JSON input. Five AI module visualizations are operational. Focus now shifts to polishing visuals, testing across all states, and preparing for animation and metadata overlays.

