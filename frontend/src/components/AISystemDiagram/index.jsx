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
		<div className="bg-zinc-800 p-4 rounded-xl">
			<h2 className="text-xl font-bold mb-4">AI System Activity</h2>
			<h3 className="text-lg font-semibold mb-2">Node-Link View</h3>
			<NodeLink modules={data.ai_modules} />
			<h3 className="text-lg font-semibold mt-6 mb-2">Cortex Sheet View</h3>
			<CortexSheet modules={data.ai_modules} />
			<h3 className="text-lg font-semibold mt-6 mb-2">Heatmap Silhouette View</h3>
			<HeatmapSilhouette modules={data.ai_modules} />
			<h3 className="text-lg font-semibold mt-6 mb-2">Radial Connectome View</h3>
			<RadialConnectome modules={data.ai_modules} />
			<h3 className="text-lg font-semibold mt-6 mb-2">Layered Network View</h3>
			<LayeredNetwork modules={data.ai_modules} />
		</div>
	)
}

export default AISystemDiagram

