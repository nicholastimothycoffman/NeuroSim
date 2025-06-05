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
                        .then((data) => setStateData(data))
        }, [selectedState])

        return (
                <div className="p-4 font-sans text-white bg-zinc-900 min-h-screen">
                        <h1 className="text-3xl font-bold mb-4">NeuroSim</h1>
                        <StateSelector selectedState={selectedState} onChange={setSelectedState} />
                        <div className="grid grid-cols-2 gap-6 mt-6">
                                <BrainDiagram data={stateData} />
                                <AISystemDiagram data={stateData} />
                        </div>
                </div>
        )
}

export default App
