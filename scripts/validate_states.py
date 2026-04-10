from pathlib import Path
import json
import sys
from jsonschema import validate, ValidationError

ROOT = Path(__file__).resolve().parents[1]
STATES_DIR = ROOT / "cognitive_states"
SCHEMA_PATH = ROOT / "schemas" / "cognitive_state.schema.json"

def load_json(path: Path):
	with path.open("r", encoding="utf-8") as f:
		return json.load(f)

def main():
	try:
		schema = load_json(SCHEMA_PATH)
	except Exception as e:
		print(f"Failed to load schema: {SCHEMA_PATH}\n{e}")
		sys.exit(1)

	failed = []

	EXCLUDED_FILES = {"index.json"}

	for json_file in sorted(STATES_DIR.glob("*.json")):
		if json_file.name in EXCLUDED_FILES:
			continue
		try:
			data = load_json(json_file)
			validate(instance=data, schema=schema)
			print(f"[OK] {json_file.name}")
		except ValidationError as e:
			print(f"[INVALID] {json_file.name}")
			print(f"  Validation error: {e.message}")
			failed.append(json_file.name)
		except json.JSONDecodeError as e:
			print(f"[BROKEN JSON] {json_file.name}")
			print(f"  Parse error: {e}")
			failed.append(json_file.name)
		except Exception as e:
			print(f"[ERROR] {json_file.name}")
			print(f"  {e}")
			failed.append(json_file.name)

	if failed:
		print("\nValidation failed for:")
		for name in failed:
			print(f" - {name}")
		sys.exit(1)

	print("\nAll cognitive state files are valid.")

if __name__ == "__main__":
	main()
