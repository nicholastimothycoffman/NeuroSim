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
                        value={state.stressLevel}
                        onChange={(e) => dispatch({ type: 'SET_STRESS_LEVEL', payload: parseFloat(e.target.value) })}
                    />
                </label>
                <button onClick={handleRunSimulation}>Run Simulation</button>
            </div>
            {state.results && (
                <div>
                    <h2>Simulation Results:</h2>
                    <p>Stress Level: {state.results.stress_level}</p>
                    <p>Focus: {state.results.focus}</p>
                    <p>Relaxation: {state.results.relaxation}</p>
                </div>
            )}
            {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
        </div>
    );
};

export default Dashboard;

