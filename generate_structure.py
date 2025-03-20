import os
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
OUTPUT_FILE = os.path.join(PROJECT_ROOT, "PROJECT_STRUCTURE.md")

class ProjectStructureHandler(FileSystemEventHandler):
	def on_any_event(self, event):
		"""Trigger regeneration of PROJECT_STRUCTURE.md on file changes."""
		generate_project_structure()

def generate_project_structure():
	"""Dynamically generates a markdown file containing the project structure."""
	structure = []
	structure.append("# NeuroSim Project Structure\n")
	structure.append("This document is auto-generated and outlines the directory structure of NeuroSim.\n")
	structure.append("## Directory Overview\n")

	def walk_directory(path, prefix=""):
		"""Recursively walks through directories and formats as markdown."""
		for item in sorted(os.listdir(path)):
			item_path = os.path.join(path, item)
			if item.startswith(".") or item in {"__pycache__", "venv", "node_modules"}:
				continue:	# Skip hidden/system folders
			if os.path.isdir(item_path):
				structure.append(f"{prefix} {item}/")
				walk_directory(item_path, prefix + "   ")
			else:
				structure.append(f"{prefix} {item}")

	walk_directory(PROJECT_ROOT)

	# Save structure to markdown file
	with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
		f.write("\n".join(structure))

	print(f"Project structure updated in {OUTPUT_FILE}")

if __name__ == "__main__":
	# Initial structure generation
	generate_project_structure()
	
	# Set up file observer
	event_handler = ProjectStructureHandler()
	observer = Observer()
	observer.schedule(event_handler, PROJECT_ROOT, recursive=True)

	print(f"Watching for file changes in {PROJECT_ROOT}...")
	try:
		observer.start()
		while True:
			time.sleep(1)	# Keep running
	except KeyboardInterrupt:
		observer.stop()
	observer.join()
