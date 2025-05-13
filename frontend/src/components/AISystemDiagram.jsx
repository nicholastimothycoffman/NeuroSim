import React from 'react'

const AISystemDiagram = ({ data }) => {
	if (!data || !data.ai_modules) return <div>Loading AI diagram...</div>

	return (
		<div className="bg-zinc-800 p-4 rounded-xl">
			<h2 className="text-xl font-bold mb-2">AI System (Modular View)</h2>
			<ul className="space-y-1">
				{data.ai_modules.map((mod) => {
					const state = mod.state
					const color =
						state === 'active' ? 'text-green-400' :
						state === 'suppressed' || state === 'inactive' ? 'text-gray-400' :
						'text-yellow-300'

					return (
						<li key={mod.name} className={color}>
							<strong>{mod.name}:</strong> {mod.state}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default AISystemDiagram

