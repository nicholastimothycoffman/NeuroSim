import React from 'react'

const BrainDiagram = ({ data }) => {
	if (!data || !data.brain_regions) return <div>Loading brain diagram...</div>

	return (
		<div className="bg-zinc-800 p-4 rounded-xl">
			<h2 className="text-xl font-bold mb-2">Brain Activity (Lateral View)</h2>
			<ul className="space-y-1">
				{data.brain_regions.map((region) => (
					<li key={region.name} className={region.intensity === 'high' ? 'text-red-400' : 'text-blue-400'}>
						{region.name} - {region.intensity} activity
					</li>
				))}
			</ul>
		</div>
	)
}

export default BrainDiagram
