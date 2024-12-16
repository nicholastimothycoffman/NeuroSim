import numpy as np
import pandas as pd

def simulate_brain_activity(data):
	# Example: Simulate activity based on stress level
	stress_level = data.get("stress_level", 0.5)
	focus = 1 - stress_level	# Simplified calculation
	relaxation = np.random.random() * stress_level

	return {
		"stress_level": stress_level,
		"focus": focus,
		"relaxation": relaxation,
	}
