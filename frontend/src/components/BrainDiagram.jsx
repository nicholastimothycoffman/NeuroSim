import React from 'react'

const BrainDiagram = ({ data }) => {
	if (!data || !data.regions) return <div>Loading brain diagram...</div>

	return (
		<div className="bg-zinc-800 p-4 rounded-xl">
			<h2 className="text-xl font-bold mb-2">Brain Activity (Lateral View)</h2>
			<ul className="space-y-1">
				{data.regions.map((region) => {
					const level = region.activation
					const intensity =
						level > 0.75 ? 'high' :
						level > 0.4  ? 'moderate' :
						'low'

					const color =
						intensity === 'high' ? 'text-red-400' :
						intensity === 'moderate' ? 'text-yellow-300' :
						'text-blue-400'

					return (
						<li key={region.name} className={color}>
							{region.name} – {intensity} activity
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default BrainDiagram

