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
		<div className="w-full h-full flex flex-col gap-y-2">
			{/* You can tweak each diagram’s height here */}
			<div className="w-full h-fulloverflow-hidden flex items-center justify-center">
				<NodeLink data={data} />
			</div>
			<div className="w-full h-full overflow-hidden flex items-center justify-center">
				<CortexSheet data={data} />
			</div>
			<div className="w-full h-[40%] min-h-[50px] overflow-hidden flex items-center justify-center">
				<HeatmapSilhouette data={data} />
			</div>
			<div className="w-full h-full overflow-hidden flex items-center justify-center">
				<RadialConnectome data={data} />
			</div>
			<div className="w-full h-full overflow-hidden flex items-center justify-center">
				<LayeredNetwork data={data} />
			</div>
		</div>
	)
}

export default AISystemDiagram

