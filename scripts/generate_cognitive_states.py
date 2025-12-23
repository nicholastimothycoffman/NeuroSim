"""
generate_cognitive_states.py

Utility script for generating example cognitive state JSON files
for use in the NeuroSim backend. Each file represents a unique
mental or physiological state with associated brain regions and
AI module behaviors.

Usage:
    Run this script from the project root:
        python generate_cognitive_states.py

Output:
    Creates a folder named 'backend/data/' if it doesn't exist,
    and writes one JSON file per cognitive state.
"""

import json
from pathlib import Path

# Output directory relative to the project root
output_dir = Path("backend/data")
output_dir.mkdir(parents=True, exist_ok=True)

def generate_state_data(regions, modules):
	"""
	Constructs a dictionary containing brain region activations
	and AI module states for a given cognitive state.

	Args:
		regions (list of tuples): (region_name, activation_level)
		modules (list of tuples): (module_name, module_state)

	Returns:
		dict: structured data for JSON export
	"""
	return {
		"regions": [{"name": name, "activation": level} for name, level in regions],
		"ai_modules": [{"name": name, "state": state} for name, state in modules]
	}

# Define cognitive states and their corresponding data
state_definitions = {
	"stress": (
		[("amygdala", 0.85), ("prefrontal_cortex", 0.4), ("hippocampus", 0.5)],
		[("threat_analysis", "active"), ("planning", "suppressed")]
	),
	"mental_fatigue": (
		[("prefrontal_cortex", 0.3), ("thalamus", 0.4), ("anterior_cingulate", 0.5)],
		[("attention_control", "degraded"), ("working_memory", "sluggish")]
	),
	"sleep_deprivation": (
		[("hypothalamus", 0.7), ("prefrontal_cortex", 0.2), ("parietal_lobe", 0.3)],
		[("cognitive_stability", "unstable"), ("memory_consolidation", "inactive")]
	),
	"intoxication": (
		[("cerebellum", 0.6), ("frontal_lobe", 0.3), ("amygdala", 0.7)],
		[("motor_control", "impaired"), ("impulse_regulation", "inactive")]
	),
	"caffeination": (
		[("reticular_formation", 0.9), ("prefrontal_cortex", 0.6)],
		[("alertness", "boosted"), ("fatigue_signals", "suppressed")]
	),
	"flow": (
		[("prefrontal_cortex", 0.8), ("motor_cortex", 0.9)],
		[("focus", "locked"), ("self_awareness", "reduced")]
	),
	"meditation": (
		[("default_mode_network", 0.2), ("anterior_cingulate", 0.6)],
		[("mind_wandering", "off"), ("awareness", "heightened")]
	),
	"cardiovascular_exercise": (
		[("motor_cortex", 0.7), ("hypothalamus", 0.6)],
		[("endorphin_release", "active"), ("stress", "reduced")]
	),
	"a_full_nights_rest": (
		[("thalamus", 0.4), ("hippocampus", 0.9)],
		[("memory_consolidation", "restored"), ("fatigue", "reset")]
	),
	"anxiety": (
		[("amygdala", 0.95), ("insula", 0.7)],
		[("threat_vigilance", "hyperactive"), ("rational_filter", "weak")]
	),
	"depression": (
		[("prefrontal_cortex", 0.3), ("amygdala", 0.6)],
		[("motivation", "low"), ("reward_processing", "blunted")]
	),
	"euphoria": (
		[("nucleus_accumbens", 0.95), ("amygdala", 0.6)],
		[("reward_pathways", "surging"), ("threat_processing", "dormant")]
	),
	"frustration": (
		[("anterior_cingulate", 0.8), ("amygdala", 0.7)],
		[("conflict_monitoring", "high"), ("impulse_control", "strained")]
	),
	"hypnosis": (
		[("default_mode_network", 0.3), ("insula", 0.5)],
		[("suggestibility", "increased"), ("self_agency", "modulated")]
	),
	"lucid_dreaming": (
		[("prefrontal_cortex", 0.6), ("visual_cortex", 0.8)],
		[("dream_awareness", "present"), ("volitional_control", "partial")]
	),
	"psychadelic_states": (
		[("default_mode_network", 0.2), ("visual_cortex", 0.95)],
		[("self_boundary", "dissolved"), ("perception", "altered")]
	),
	"dissociation": (
		[("insula", 0.2), ("parietal_lobe", 0.3)],
		[("self_identification", "disrupted"), ("emotional_processing", "numbed")]
	),
	"hyperfocus": (
		[("prefrontal_cortex", 0.9), ("parietal_lobe", 0.8)],
		[("attention_tunnel", "narrowed"), ("external_awareness", "suppressed")]
	),
	"cognitive_overload": (
		[("prefrontal_cortex", 0.95), ("hippocampus", 0.6)],
		[("working_memory", "overloaded"), ("decision_making", "sluggish")]
	),
	"creative_ideation": (
		[("default_mode_network", 0.75), ("temporal_lobe", 0.85)],
		[("associative_thinking", "active"), ("inhibition", "reduced")]
	),
	"physical_fatigue": (
		[("motor_cortex", 0.3), ("cerebellum", 0.4)],
		[("movement_precision", "low"), ("stamina", "depleted")]
	),
	"fasting_caloric_restriction": (
		[("hypothalamus", 0.7), ("hippocampus", 0.6)],
		[("alertness", "heightened"), ("energy_availability", "low")]
	),
	"high_blood_glucose_sugar_crash": (
		[("hypothalamus", 0.8), ("insula", 0.6)],
		[("energy_spike", "followed_by_crash"), ("mood_stability", "fragile")]
	),
	"neuroinflammation": (
		[("glial_cells", 0.95), ("hippocampus", 0.5)],
		[("neural_efficiency", "reduced"), ("fog", "present")]
	),
	"pain": (
		[("somatosensory_cortex", 0.9), ("anterior_cingulate", 0.8)],
		[("nociception", "active"), ("coping", "varied")]
	),
	"stage_fright_performance_anxiety": (
		[("amygdala", 0.9), ("prefrontal_cortex", 0.5)],
		[("self_monitoring", "elevated"), ("speech_motor", "unstable")]
	),
	"groupthink_conformity_pressure": (
		[("prefrontal_cortex", 0.4), ("insula", 0.6)],
		[("individual_judgment", "muted"), ("social_alignment", "maximized")]
	),
	"digital_overstimulation_screen_fatigue": (
		[("visual_cortex", 0.9), ("prefrontal_cortex", 0.3)],
		[("dopamine_cycle", "blunted"), ("attention_span", "fragmented")]
	),
	"immersive_vr_augmented_reality_experiences": (
		[("parietal_lobe", 0.8), ("visual_cortex", 0.9)],
		[("presence", "strong"), ("reality_monitoring", "challenged")]
	),
}

# Write each cognitive state to its corresponding JSON file
for state_name, (regions, modules) in state_definitions.items():
	file_path = output_dir / f"{state_name}.json"
	with open(file_path, "w") as f:
		json.dump(generate_state_data(regions, modules), f, indent=2)

print(f"Generated {len(state_definitions)} cognitive state files in '{output_dir}/'")

