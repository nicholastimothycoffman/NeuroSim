import React from 'react'
import NodeLink from './NodeLink'
import RadialConnectome from './RadialConnectome'
import HeatmapSilhouette from './HeatmapSilhouette'
import LayeredNetwork from './LayeredNetwork'
import CortexSheet from './CortexSheet'

const AISystemDiagram = ({ data }) => {
	if (!data || !data.ai_modules) {
		return <div>Loading AI visualizations...</div>
	}

	return (
		<div className="bg-zinc-800 p-4 rounded-xl">
			<h2 className="text-xl font-bold mb-4">AI System Activity</h2>
			<div className="grid grid-cols-2 gap-6">
				<NodeLink modules={data.ai_modules} />
				<RadialConnectome modules={data.ai_modules} />
				<HeatmapSilhouette modules={data.ai_modules} />
				<LayeredNetwork modules={data.ai_modules} />
				<CortexSheet modules={data.ai_modules} />
			</div>
		</div>
	)
}

export default AISystemDiagram

