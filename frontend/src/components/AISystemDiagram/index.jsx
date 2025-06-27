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
		<div className="w-full h-full flex flex-col gap-y-16 justify-between">
			{/* Node Link Diagram */}
			<div className="w-full flex flex-col h-[28%] max-h-[180px]">
				<h3 className="text-lg font-semibold text-center mb-1 text-blue-300">Node Link</h3>
				<div className="flex-1 flex items-center justify-center overflow-hidden">
					<NodeLink data={data} />
				</div>
			</div>
			{/* Cortex Sheet Diagram */}
			<div className="w-full flex flex-col h-[22%] max-h-[150px] mt-16">
				<h3 className="text-lg font-semibold text-center mb-1 text-yellow-300">Cortex Sheet</h3>
				<div className="flex-1 flex items-center justify-center overflow-hidden mt-[-8px]">
					<CortexSheet data={data} />
				</div>
			</div>
			{/* Heatmap Silhouette Diagram */}
			<div className="w-full flex flex-col h-[32%] max-h-[220px] mt-16">
				<h3 className="text-lg font-semibold text-center mb-6 text-pink-300">Heatmap Silhouette</h3>
				<div className="flex-1 flex items-center justify-center overflow-hidden">
					<HeatmapSilhouette data={data} />
				</div>
			</div>
			{/* Radial Connectome Diagram */}
			<div className="w-full flex flex-col h-[48%] max-h-[350px] mt-16">
				<h3 className="text-lg font-semibold text-center mb-10 text-green-300">Radial Connectome</h3>
				<div className="flex-1 flex items-center justify-center overflow-hidden">
					<RadialConnectome data={data} />
				</div>
			</div>
			{/* Layered Network Diagram */}
			<div className="w-full flex flex-col h-[46%] max-h-[350px] mt-16">
				<h3 className="text-lg font-semibold text-center mb-1 text-purple-300">Layered Network</h3>
				<div className="flex-1 flex items-center justify-center overflow-hidden">
					<LayeredNetwork data={data} />
				</div>
			</div>
		</div>
	)
}

export default AISystemDiagram

