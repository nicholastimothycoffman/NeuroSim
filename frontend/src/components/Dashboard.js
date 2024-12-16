import React, { useState } from 'react';
import { runSimulation } from '../services/api';

const Dashboard = () => {
	const [stressLevel, setStressLevel] = useState(0.5);	// Initial stress level
	const [results, setResults] = useState(null);	// Results from the API
	const [error, setError] = useState(null);	// Error state

	const handleRunSimulation = async () => {
		try {
			setError(null);	// Reset any previous error
			const data = { stress_level: stressLevel };
			const simulationResults = await runSimulation(data); 	// Call the API
			setResults(simulationResults);	// Upddate results state
		} catch (err) {
			setError('Failed to fetch simulation results. Please try again.');
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
