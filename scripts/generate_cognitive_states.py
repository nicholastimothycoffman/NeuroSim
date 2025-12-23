"""
generate_cognitive_states.py

Utility script for generating example cognitive state JSON files
for use in the NeuroSim project. Each file represents a unique
mental or physiological state with associated brain regions and
AI module behaviors.

Usage:
	Run this script from the project root:
		python scripts/generate_cognitive_states.py

Options:
	--out-dir <path>  Output directory (default: cognitive_states)
	--force           Overwrite existing files (default: skip)

Output:
	Creates the output directory if it doesn't exist,
	and writes one JSON file per cognitive state.
"""

import argparse
import json
from pathlib import Path


def parse_args() -> argparse.Namespace:
	parser = argparse.ArgumentParser(description="Generate cognitive state JSON files.")
	parser.add_argument("--out-dir", default="cognitive_states", help="Output directory (default: cognitive_states)")
	parser.add_argument("--force", action="store_true", help="Overwrite existing files (default: skip)")
	return parser.parse_args()


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


def safe_write_json(path: Path, data: dict) -> None:
	"""
	Write JSON atomically: write to a temp file then replace the target.
	This avoids partially-written/corrupt JSON if interrupted.
	"""
	tmp_path = path.with_suffix(path.suffix + ".tmp")
	with open(tmp_path, "w", encoding="utf-8") as f:
		json.dump(data, f, indent=2)
		f.write("\n")
	tmp_path.replace(path)


def main() -> int:
	args = parse_args()

	# Output directory relative to the project root
	output_dir = Path(args.out_dir)
	output_dir.mkdir(parents=True, exist_ok=True)

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
		"caffeination": (
			[("reticular_formation", 0.9), ("prefrontal_cortex", 0.6)],
			[("alertness", "boosted"), ("fatigue_signals", "suppressed")]
		),
		"flow": (
			[("prefrontal_cortex", 0.8), ("motor_cortex", 0.9)],
			[("focus", "locked"), ("self_awareness", "reduced")]
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
		"frustration": (
			[("anterior_cingulate", 0.8), ("amygdala", 0.7)],
			[("conflict_monitoring", "high"), ("impulse_control", "strained")]
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
		"groupthink_conformity_pressure": (
			[("prefrontal_cortex", 0.4), ("insula", 0.6)],
			[("individual_judgment", "muted"), ("social_alignment", "maximized")]
		),
		"digital_overstimulation_screen_fatigue": (
			[("visual_cortex", 0.9), ("prefrontal_cortex", 0.3)],
			[("dopamine_cycle", "blunted"), ("attention_span", "fragmented")]
		),
	}

	written = 0
	skipped = 0

	for state_name, (regions, modules) in state_definitions.items():
		file_path = output_dir / f"{state_name}.json"

		if file_path.exists() and not args.force:
			skipped += 1
			print(f"SKIP  {file_path} (exists; use --force to overwrite)")
			continue

		data = generate_state_data(regions, modules)
		safe_write_json(file_path, data)
		written += 1
		print(f"WROTE {file_path}")

	print(f"\nDone. Written: {written}, Skipped: {skipped}, Total definitions: {len(state_definitions)}")
	return 0


if __name__ == "__main__":
	raise SystemExit(main())

