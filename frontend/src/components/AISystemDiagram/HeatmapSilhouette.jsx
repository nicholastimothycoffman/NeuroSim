import React from 'react'

// Utility to determine fill color based on activation
const getFillColor = (activation) => {
	if (activation > 0.75) return '#ef4444' // red
	if (activation > 0.4) return '#facc15'  // yellow
	return '#3b82f6'                        // blue
}

const HeatmapSilhouette = ({ data }) => {
	const modules = data?.ai_modules || []

	if (!modules.length) {
		return <p>No AI module data available.</p>
	}

	// Scalable dimensions
	const svgWidth = 60
	const svgHeight = 100
	const blockHeight = svgHeight / modules.length
	const blockWidth = 20
	const xOffset = (svgWidth - blockWidth) / 2

	return (
		<svg
			viewBox={`0 0 ${svgWidth} ${svgHeight}`}
			className="w-full h-full object-contain"
			preserveAspectRatio="xMidYMid meet"
		>
			{/* Silhouette outline */}
			<rect
				x={(svgWidth - 20) / 2}
				y="0"
				width="20"
				height={svgHeight}
				rx="8"
				fill="none"
				stroke="#9ca3af"
				strokeWidth="0.75"
			/>

			{/* Heatmap blocks */}
			{modules.map((mod, i) => {
				const y = i * blockHeight
				const color = getFillColor(mod.activation)

				return (
					<g key={mod.name}>
						<rect
							x={xOffset}
							y={y}
							width={blockWidth}
							height={blockHeight * 0.9}
							fill={color}
							rx="1.5"
							style={{ transition: 'fill 0.3s ease-in-out' }}
						>
							<title>{mod.name.replace(/_/g, ' ')}</title>
						</rect>
						<text
							x={svgWidth / 2}
							y={y + blockHeight / 2}
							textAnchor="middle"
							alignmentBaseline="middle"
							fontSize="2.5"
							fill="#e5e7eb"
						>
							{mod.name.replace(/_/g, ' ')}
						</text>
					</g>
				)
			})}
		</svg>
	)
}

export default HeatmapSilhouette

