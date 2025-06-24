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
* Implemented all 5 dynamic AI diagram components with correct prop handling and visual enhancements:
  * `NodeLink.jsx`: Added node connections, hover tooltips, animated fill transitions
  * `CortexSheet.jsx`: Added hover tooltips, animated fill transitions, text staggering
  * `HeatmapSilhouette.jsx`: Added hover tooltips, vertical label staggering (left/right)
  * `RadialConnectome.jsx`: Added tooltips, central AI core node, consistent spacing
  * `LayeredNetwork.jsx`: Added tooltip hover support, text label staggering logic
* Confirmed `BrainDiagram` is cleanly separated from AI visuals
* Verified AI diagrams render activation-based visuals using `data.ai_modules`
* Added Tailwind CSS integration via `tailwind.config.cjs`, `postcss.config.cjs`, and `index.css`
* Replaced `w-1/2` with `flex-1` and verified `flex`-based layout intention
* Verified Tailwind is active using `text-pink-600` / `bg-yellow-300` diagnostic elements
* Confirmed Tailwind working after postcss regression by purging plugins, reinstalling, and testing baseline flexbox layout with red/green split
* Reintroduced real components (`BrainDiagram`, `AISystemDiagram`) into split layout
* Enforced SVG height containment using `h-1/5`, `max-h-[20%]`, `min-h-[80px]`, and `object-contain`
* Adjusted SVGs in all AI diagrams to use `viewBox`, `preserveAspectRatio`, and `w-full h-full`
* Centralized layout sizing logic into `AISystemDiagram/index.jsx` for per-component height control
* Refined label layout logic in `NodeLink.jsx`, `CortexSheet.jsx`, and `HeatmapSilhouette.jsx` to avoid text collisions
* Improved inter-diagram spacing using Tailwind `gap-y-4` in AI diagram stack

## Immediate Focus

* Bring AI diagrams closer together on browser
* Validate each AI diagram respects its wrapper constraints and adjusts sizing proportionally
* Ensure component-level spacing remains consistent regardless of container resizing
* Verify that only one diagram is rendered at a time during debug/development toggles
* Remove remaining placeholder or scaffolding elements once visual and data flow are stable

## In Progress

* Ensure `region.name` fields align precisely with frontend `regionPositions` mappings
* Centralize common functions like `getFillColor()` and `normalizeName()` in shared utility module
* Implement fallback rendering for unknown or missing brain regions and AI modules
* Standardize interactivity across diagrams (hover highlights, optional click interactions)
* Add temporary visual outlines for component boundary debugging during layout tuning

## Next Steps

* Animate transitions between cognitive states (fade effects, morphing shapes, motion pathing)
* Add metadata UI overlays or interactive modals to show additional AI module details
* Expose `/api/states` endpoint to support dynamically listing and previewing available brain states
* Wrap diagram views in responsive container with toggled layouts for small vs large screens
* Create a test suite (unit and integration) for validating rendering logic and backend-frontend integration
* Document rendering behavior, component structure, and input expectations in `docs/frontend.md`

---

**Current Status**  
All five AI visualizations are now rendering cleanly with consistent sizing, spacing, and interactive affordances. Layout control has been centralized, tooltips and text staggering reduce clutter, and the application now visually reflects dynamic brain state data end-to-end. Remaining tasks center around debugging tools, modularization, and final polish before animation and testing layers are added.

