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
- Added Tailwind CSS integration via `tailwind.config.cjs`, `postcss.config.cjs`, and `index.css`  
- Replaced `w-1/2` with `flex-1` and verified `flex`-based layout intention  
- Verified Tailwind is active using `text-pink-600` / `bg-yellow-300` diagnostic elements  

---

## Immediate Focus
- Resolve persistent layout bug: all diagrams still render in full-width left side  
- Debug and confirm whether the `#root` container or outer flex context is being overridden  
- Confirm that `App.jsx` top-level container is not constrained by external layout rules  
- Temporarily isolate `BrainDiagram` and `AISystemDiagram` for unit rendering testing  
- Add hard borders (e.g. `border-4 border-blue-500`) to confirm layout divisions  
- Use SVG `preserveAspectRatio` and constrained `w-full h-full` in inner diagrams  
- Continue enforcing height containment via `h-full max-h-[XX%]` on child components  
- Confirm that no component returns an unwrapped `svg` element without sizing  

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
All diagrams (2 brain, 5 AI) successfully render from JSON input. Tailwind is confirmed functional. However, a layout bug persists where all content displays as full-width in a single column. Active focus is on forcing horizontal layout containment using `flex`, `h-full`, and diagnostic wrapper borders.

