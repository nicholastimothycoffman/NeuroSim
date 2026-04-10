# NeuroSim TODO (Updated)

## Completed

### Core System Integration
- Verified backend /api/state/{state_name} functions correctly using FastAPI
- Confirmed frontend App.jsx fetches and renders cognitive state data end-to-end
- Established stable backend → frontend data pipeline

### Cognitive State Data Model
- Standardized JSON schema with:
  - state_name
  - description
  - brain_regions
  - ai_modules
  - ai_analog
  - metadata
- Migrated and validated all cognitive state files via validate_states.py
- Introduced category taxonomy:
  - cognitive, emotional, physiological, social
- Curated and normalized full set of cognitive states with AI analog mappings

### Visualization System
- Implemented BrainDiagram with lateral and medial views
- Implemented 5 AI visualization systems:
  - Node-link network
  - Radial connectome
  - Heatmap silhouette
  - Layered network
  - Cortex sheet
- Established consistent SVG scaling via viewBox="0 0 200 50"
- Implemented activation-based visual encoding across all diagrams
- Added tooltip interactivity and label collision handling

### Layout & Styling
- Integrated Tailwind CSS and resolved PostCSS issues
- Established responsive split layout (flex-1)
- Centralized diagram sizing and spacing logic
- Ensured consistent rendering constraints across all visual components

## Immediate Focus (Critical)

### 1. Schema Consolidation (Highest Priority)
- Add "type" field to all states:
  - "primary" vs "modifier"
- Audit all states for consistent metadata structure
- Ensure naming consistency across:
  - brain_regions
  - ai_modules

### 2. AI Module Taxonomy (Critical Structural Step)
- Define canonical set of reusable AI modules
- Eliminate ad hoc naming drift
- Group modules into categories:
  - attention
  - memory
  - control
  - optimization
  - I/O
- Refactor all JSON files to align with this taxonomy

### 3. Backend State Registry
- Implement /api/states endpoint
- Replace hardcoded frontend state list with dynamic fetch
- Create cognitive_states/index.json registry file

## In Progress

### Data Integrity & Utilities
- Ensure region.name aligns with frontend regionPositions
- Centralize shared utilities:
  - normalizeName()
  - getFillColor()
- Implement fallback handling for:
  - unknown regions
  - missing modules

### Visualization Consistency
- Standardize interaction patterns across all diagrams:
  - hover
  - highlighting
  - tooltip structure
- Remove remaining debug scaffolding and placeholder logic

## Next Steps (High Value)

### State Transitions & Dynamics
- Animate transitions between cognitive states
- Introduce temporal dimension (state evolution over time)

### UI/UX Enhancements
- Add metadata overlays or expandable panels
- Implement state comparison view (side-by-side states)
- Add filtering by:
  - category
  - intensity
  - type

### Testing & Reliability
- Add validation tests for schema compliance
- Add frontend rendering tests for:
  - brain diagrams
  - AI diagrams
- Add integration tests for API → UI flow

### Documentation
- Update docs/frontend.md with:
  - component architecture
  - data flow
- Add docs/schema.md:
  - formal definition of cognitive state model
- Add docs/ai_taxonomy.md (after taxonomy is defined)

## Future Extensions (Do Not Start Yet)
- Multi-state blending (e.g. fatigue + caffeine)
- Simulation engine for state transitions
- AI-driven inference of cognitive state from inputs
- Research framing / publishable write-up

## Current Status
The project has transitioned from a visualization prototype into a schema-driven cognitive state modeling system with AI analog mapping.

All cognitive states are validated and structurally consistent. The visualization layer is stable and expressive. The primary remaining work is formalization:
- schema completeness
- module taxonomy
- system coherence
