# NeuroSim TODO

## Completed

* Verified backend `/api/state/{state_name}` functions correctly using FastAPI
* Implemented file path handling with `pathlib` for robust JSON loading
* Confirmed frontend `App.jsx` fetches cognitive state data and routes to components
* Standardized `.json` schema with `regions`, `ai_modules`, and `ai_analog`
* Migrated all `.json` files using `convert_states_format.py`
* Identified and curated 15 core brain states with strong AI analogs
* Designed and documented long-term visual layout (lateral/medial brain + 5 AI views)
* Implemented conditional rendering of `BrainDiagram` and `AISystemDiagram`
* Created `LateralView.jsx` and `MedialView.jsx` with functional SVG rendering
* Visualized brain region activation using color-coded circles
* Verified end-to-end data flow from backend to dynamic SVG visuals
* Added logging in `App.jsx`, `BrainDiagram.jsx`, and region views for live debugging
* Implemented all 5 dynamic AI diagram components with correct prop handling:

  * `NodeLink.jsx`
  * `CortexSheet.jsx`
  * `HeatmapSilhouette.jsx`
  * `RadialConnectome.jsx`
  * `LayeredNetwork.jsx`
* Confirmed `BrainDiagram` is cleanly separated from AI visuals
* Verified AI diagrams render activation-based visuals using `data.ai_modules`
* Added Tailwind CSS integration via `tailwind.config.cjs`, `postcss.config.cjs`, and `index.css`
* Replaced `w-1/2` with `flex-1` and verified `flex`-based layout intention
* Verified Tailwind is active using `text-pink-600` / `bg-yellow-300` diagnostic elements
* Confirmed Tailwind working after postcss regression by purging plugins, reinstalling, and testing baseline flexbox layout with red/green split

---

## Immediate Focus

* Restore real components (BrainDiagram + AISystemDiagram) into confirmed split layout
* Begin enforcing diagram height containment using `h-1/2` or `h-1/5` + `max-h-[XX%]`
* Validate each diagram honors its own wrapper bounds within `AISystemDiagram`
* Confirm only one component is rendered at a time during debugging
* Check each child component uses `className="w-full h-full"` (or proportioned height) within its container
* Use Tailwind tools like `aspect-[2/1]` or `object-contain` to maintain SVG scaling
* Remove placeholder debug content only after layout integrity is confirmed

---

## In Progress

* Ensure `region.name` fields align with frontend `regionPositions` mappings
* Centralize `getFillColor()` and `normalizeName()` into shared utility module
* Prepare fallback rendering for unknown brain regions or AI modules
* Define consistent interactive behavior (hover tooltips, optional click handling)
* Implement temporary outlines or debug visuals to confirm diagram boundaries

---

## Next Steps

* Animate transitions between cognitive states (fade, color morph, motion)
* Add metadata UI support (tooltips, overlays, expandable AI module notes)
* Optionally expose `/api/states` endpoint to dynamically list available states
* Add responsive layout wrapper for side-by-side brain and AI visualizations
* Implement testing suite (unit + integration) for data pipeline and component rendering
* Document rendering behavior, module structure, and component inputs in `docs/frontend.md`

---

**Current Status**
Split layout using `flex` and `flex-1` is confirmed functioning. Tailwind styles render properly and the two-halves structure now displays as expected. Next step is to progressively reintroduce real components inside the working layout and enforce visual constraints on their SVG content.

