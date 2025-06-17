import React from 'react'
import LateralView from './LateralView'
import MedialView from './MedialView'

const BrainDiagram = ({ data }) => {
	console.log('🧠 BrainDiagram received data:', data)

	if (!data || !Array.isArray(data.regions) || data.regions.length === 0) {
		console.warn('⚠️ BrainDiagram: No valid brain regions found:', data?.regions)
		return <div>Loading brain diagrams...</div>
	}
	
	return (
		<div className="w-full h-full flex flex-col justify-between items-center space-y-2 overflow-hidden">
			{/* Lateral View */}
			<div className="w-full h-1/2 max-h-[49%]">
				<LateralView regions={data.regions} />
			</div>

			{/* Medial View */}
			<div className="w-full h-1/2 max-h-[49%]">
				<MedialView regions={data.regions} />
			</div>
		</div>
	)
}

export default BrainDiagram

