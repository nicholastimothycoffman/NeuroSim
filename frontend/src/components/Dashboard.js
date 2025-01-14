import React, { useReducer, useEffect } from 'react';
import { runSimulation } from '../services/api';

const initialState = {
	stressLevel: 0.5,
	results: null,
	error: null,
	isLoading: false
};

function reducer(state, action) {
	switch (action.type) {
		case 'SET_STRESS_LEVEL':
			return { ...state, stressLevel: action.payload };
		case 'RUN_SIMULATION':
			return { ...state, isLoading: true, error: null };
		case 'SET_RESULTS':
			return { ...state, results: action.payload, isLoading: false };
		case 'SET_ERROR':
			return { ...state, error: action.payload, isLoading: false };
		default:
			return state;
	}
}

const Dashboard = () => {
	const [state, dispatch] = useReducer(reducer, initialState);	

	const handleRunSimulation = async () => {
		dispatch({ type: 'RUN_SIMULATION' });
		try {
			const simulationResults = await runSimulation({ stress_level: state.stressLevel });
			dispatch({ type: 'SET_RESULTS', payload: simulationResults });
		} catch (err) {
			dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch simulation results. Please try again.' });
		}
	};
	
	return (
		<div>
			<h1>Brain Activity Simulation</h1>
			<div>
				<label>
					Stress Level:
					<input
						type="range"
						min="0"
						max="1"
						step="0.1"
						value={stressLevel}
						onChange={(e) => setStressLevel(parseFloat(e.target.value))}
					/>
				</label>
				<button onClick={handleRunSimulation}>Run Simulation</button>
			</div>
			{results && (
				<div>
					<h2>Simulation Results:</h2>
					<p>Stress Level: {results.stress_level}</p>
					<p>Focus: {results.focus}</p>
					<p>Relaxation: {results.relaxation}</p>
				</div>
			)}
			{error && <p style={{ color: 'red' }}>{error}</p>}
		</div>
	);
};

export default Dashboard;
