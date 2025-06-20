import React, { useState, useEffect } from 'react'
import BrainDiagram from './components/BrainDiagram'
import AISystemDiagram from './components/AISystemDiagram'
import StateSelector from './components/StateSelector'
import './index.css'

const App = () => {
	const [stateData, setStateData] = useState(null)
	const [selectedState, setSelectedState] = useState('stress')

	useEffect(() => {
		// console.log('Fetching cognitive state:', selectedState)
		fetch(`http://localhost:8000/api/state/${selectedState}`)
			.then((res) => res.json())
			.then((data) => {
				// console.log('Received state data:', data)
				setStateData(data)
			})
			.catch((err) => console.error('Failed to fetch state data:', err))
	}, [selectedState])

	return (
		<div className="min-h-screen min-w-full bg-zinc-900 text-white font-sans flex flex-col">
			{/* Header */}
			<div className="p-2 flex justify-between items-center bg-zinc-800 border-b border-zinc-700">
				<h1 className="text-xl font-bold">NeuroSim</h1>
				<StateSelector selectedState={selectedState} onChange={setSelectedState} />
			</div>

			{/* Main diagram area */}
			<div className="flex flex-grow w-full divide-x divide-zinc-700">
				{/* Left: Brain Diagrams */}
				<div className="flex-1 p-2 flex flex-col items-center justify-between space-y-2 overflow-hidden bg-zinc-900">
					{stateData ? (
						<BrainDiagram data={stateData} />
					) : (
						<p>Loading brain diagrams...</p>
					)}
				</div>

				{/* Right: AI Diagrams */}
				<div className="flex-1 p-2 flex flex-col items-center justify-between space-y-2 overflow-hidden bg-zinc-900">
					{stateData ? (
						<AISystemDiagram data={stateData} />
					) : (
						<p>Loading AI visualizations...</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default App

