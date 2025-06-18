import React from 'react'
import NodeLink from './NodeLink'
import CortexSheet from './CortexSheet'
import HeatmapSilhouette from './HeatmapSilhouette'
import RadialConnectome from './RadialConnectome'
import LayeredNetwork from './LayeredNetwork'

const AISystemDiagram = ({ data }) => {
	if (!data || !data.ai_modules) {
		return <p>Loading AI visualizations...</p>
	}

	return (
		<div className="w-full h-full flex flex-col justify-between space-y-2">
			<div className="w-full h-1/5 max-h-[20%] min-h-[80px] overflow-hidden">
				<NodeLink data={data} />
			</div>
			<div className="w-full h-1/5 max-h-[20%] min-h-[80px] overflow-hidden">
				<CortexSheet data={data} />
			</div>
			<div className="w-full h-1/5 max-h-[20%] min-h-[80px] overflow-hidden">
				<HeatmapSilhouette data={data} />
			</div>
			<div className="w-full h-1/5 max-h-[20%] min-h-[80px] overflow-hidden">
				<RadialConnectome data={data} />
			</div>
			<div className="w-full h-1/5 max-h-[20%] min-h-[80px] overflow-hidden">
				<LayeredNetwork data={data} />
			</div>
		</div>
	)
}

export default AISystemDiagram

