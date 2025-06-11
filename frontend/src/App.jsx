import React, { useState, useEffect } from 'react'
import BrainDiagram from './components/BrainDiagram'
import AISystemDiagram from './components/AISystemDiagram'
import StateSelector from './components/StateSelector'
import './styles/index.css'

const App = () => {
	const [stateData, setStateData] = useState(null)
	const [selectedState, setSelectedState] = useState('stress')

	useEffect(() => {
		fetch(`http://localhost:8000/api/state/${selectedState}`)
			.then((res) => res.json())
			.then((data) => {
				console.log('Received state data:', data)
				setStateData(data)
			})
			.catch((err) => console.error('Failed to fetch state data:', err))
	}, [selectedState])

	return (
		<div className="p-4 font-sans text-white bg-zinc-900 min-h-screen">
			<h1 className="text-3xl font-bold mb-4">NeuroSim</h1>
			<StateSelector selectedState={selectedState} onChange={setSelectedState} />
			<div className="grid grid-cols-2 gap-6 mt-6">
				{stateData ? (
					<>
						<BrainDiagram data={stateData} />
						<AISystemDiagram data={stateData} />
					</>
				) : (
					<div className="col-span-2">
						<p>Loading brain diagrams...</p>
						<p>Loading AI visualizations...</p>
					</div>
				)}
			</div>
		</div>
	)

}

export default App

