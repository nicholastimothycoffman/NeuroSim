from flask import Blueprint, request, jsonify
from simulation import simulate_brain_activity

simulation_routes = Blueprint("simulation_routes", __name__)

@simulation_routes.route("/simulation", methods=["POST"])
def run_simulation():
	data = request.json
	print("Request data:", data)	# Log the received data
	result = simulate_brain_activity(data)
	print("Simulation result:", result)	# Log the result of the simulation
	return jsonify(result)
