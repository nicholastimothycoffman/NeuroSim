import pytest
from flask import json
from app import app

@pytest.fixture
def client():
	app.config['TESTING'] = True
	with app.test_client() as client:
		yield client

def test_run_simulation(client):
	""" Test simulation endpoint """
	response = client.post('/api/simulation', json={'stress_level': 0.5})
	data = json.loads(response.data)
	assert response.status_code == 200
	assert 'focus' in data
	assert 'relaxation' in data
	assert data['stress_level'] == 0.5
