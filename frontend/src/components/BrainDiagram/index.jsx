import React from 'react'
import LateralView from './LateralView'
import MedialView from './MedialView'

const BrainDiagram = ({ data }) => {
	if (!data || !data.regions) {
		return <div>Loading brain diagrams...</div>
	}

	return (
		<div className="bg-zinc-800 p-4 rounded-xl">
			<h2 className="text-xl font-bold mb-4">Human Brain Activity</h2>
			<div className="grid grid-cols-2 gap-6">
				<div>
					<h3 className="text-lg font-semibold mb-2">Lateral View</h3>
					<LateralView regions={data.regions} />
				</div>
				<div>
					<h3 className="text-lg font-semibold mb-2">Medial View</h3>
					<MedialView regions={data.regions} />
				</div>
			</div>
		</div>
	)
}

export default BrainDiagram

