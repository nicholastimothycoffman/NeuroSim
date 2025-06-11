# utils/convert_states_format.py
import os
import json

INPUT_DIR = './data'

state_map = {
	"active": 0.9,
	"suppressed": 0.2,
	"idle": 0.0
}

for filename in os.listdir(INPUT_DIR):
	if not filename.endswith('.json'):
		continue

	filepath = os.path.join(INPUT_DIR, filename)
	with open(filepath, 'r') as f:
		data = json.load(f)

	# Convert state to activation
	for module in data.get("ai_modules", []):
		if "state" in module:
			state = module.pop("state")
			module["activation"] = state_map.get(state, 0.0)

	with open(filepath, 'w') as f:
		json.dump(data, f, indent=2)

