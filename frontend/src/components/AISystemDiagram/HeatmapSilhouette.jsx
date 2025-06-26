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
	const svgWidth = 200
	const svgHeight = 80
	const blockHeight = svgHeight / modules.length
	const blockWidth = 15
	const xOffset = (svgWidth - blockWidth) / 2

	return (
		<svg
			viewBox="0 0 200 50"
			className="w-full h-full object-contain"
			preserveAspectRatio="xMidYMid meet"
		>
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
							style={{ transition: 'fill 0.3s ease-in-out' }}
						>
							<title>{mod.name.replace(/_/g, ' ')}</title>
						</rect>
						<text
							x={i % 2 === 0 ? xOffset - 4 : xOffset + blockWidth + 4}
							y={y + blockHeight / 2}
							textAnchor={i % 2 === 0 ? 'end' : 'start'}
							alignmentBaseline="middle"
							fontSize="10"
							fill="#e5e7eb"
						>
							{mod.name.replace(/_/g, ' ').slice(0, 18)}
						</text>
					</g>
				)
			})}
		</svg>
	)
}

export default HeatmapSilhouette

