import React, { useState, useEffect } from 'react'
import BrainDiagram from './components/BrainDiagram'
import AISystemDiagram from './components/AISystemDiagram'
import StateSelector from './components/StateSelector'
import './index.css'

const App = () => {
	const [stateData, setStateData] = useState(null)
	const [selectedState, setSelectedState] = useState('stress')

	useEffect(() => {
		console.log('Fetching cognitive state:', selectedState)
		fetch(`http://localhost:8000/api/state/${selectedState}`)
			.then((res) => res.json())
			.then((data) => {
				console.log('Received state data:', data)
				setStateData(data)
			})
			.catch((err) => console.error('Failed to fetch state data:', err))
	}, [selectedState])
	
	return (
		<div className="h-screen w-screen bg-black text-white font-sans">
			<div className="flex h-full w-full">
				<div className="bg-red-600 w-1/2 h-full flex items-center justify-center">
					<p className="text-white text-2xl">Left Half (Brain)</p>
				</div>
				<div className="bg-green-600 w-1/2 h-full flex items-center justify-center">
					<p className="text-white text-2xl">Right Half (AI)</p>
				</div>
			</div>
		</div>
	)

	
	//return (
	//	<div className="min-h-screen min-w-full bg-zinc-900 text-white font-sans flex flex-col">
	//		{/* Header */}
	//		<div className="p-2 flex justify-between items-center bg-zinc-800 border-b border-zinc-700">
	//			<h1 className="text-xl font-bold">NeuroSim</h1>
	//			<StateSelector selectedState={selectedState} onChange={setSelectedState} />
	//		</div>

	//		{/* Main diagram area */}
	//		<div className="flex h-full w-full divide-x divide-zinc-700">
	//			{/* Left: Brain Diagrams */}
	//			<div className="flex-1 p-2 border-4 border-blue-500 flex flex-col items-center justify-between space-y-2 overflow-hidden bg-red-800">
	//				{stateData ? (
	//					<BrainDiagram data={stateData} />
	//				) : (
	//					<p>Loading brain diagrams...</p>
	//				)}
	//			</div>
	//	
	//			{/* Right: AI Diagrams */}
	//			<div className="flex-1 p-2 border-4 border-yellow-500 flex flex-col items-center justify-between space-y-2 overflow-hidden bg-green-800">
	//				{stateData ? (
	//					<AISystemDiagram data={stateData} />
	//				) : (
	//					<p>Loading AI visualizations...</p>
	//				)}
	//			</div>
	//		</div>
	//	</div>
	//)

}

export default App

