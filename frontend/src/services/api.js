import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api';	// Base URL for Flask API

export const runSimulation = async (data) => {
	try {
		const response = await axios.post(`${API_URL}/simulation`, data);
		return response.data;	// Return the simulation results
	} catch (error) {
		console.error('Error running simulation:', error);
		throw error;
	}
};
