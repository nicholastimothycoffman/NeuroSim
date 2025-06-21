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
	const svgWidth = 30
	const svgHeight = 50
	const blockHeight = svgHeight / modules.length
	const blockWidth = 10
	const xOffset = (svgWidth - blockWidth) / 2

	return (
		<svg
			viewBox={`0 0 ${svgWidth} ${svgHeight}`}
			className="w-full h-auto object-contain"
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
							x={i % 2 === 0 ? 1 : svgWidth - 1}
							y={y + blockHeight / 2}
							textAnchor={i % 2 === 0 ? 'start' : 'end'}
							alignmentBaseline="middle"
							fontSize="5"
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

