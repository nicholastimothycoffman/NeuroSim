from flask import Flask
from routes import simulation_routes
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Register Blueprints
app.register_blueprint(simulation_routes, url_prefix="/api")

if __name__ == "__main__":
	app.run(debug=True)
