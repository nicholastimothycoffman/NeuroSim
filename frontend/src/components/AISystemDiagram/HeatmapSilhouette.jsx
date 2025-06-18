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

	const width = 200
	const height = 300
	const blockHeight = height / modules.length
	const blockWidth = 60
	const xOffset = (width - blockWidth) / 2

	return (
		<svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
			{/* Placeholder silhouette outline */}
			<rect
				x="70"
				y="10"
				width="60"
				height="280"
				rx="30"
				fill="none"
				stroke="#9ca3af"
				strokeWidth="2"
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
							height={blockHeight - 4}
							fill={color}
							rx="4"
							style={{ transition: 'fill 0.3s ease-in-out' }}
						>
							<title>{mod.name.replace(/_/g, ' ')}</title>
						</rect>
						<text
							x={width / 2}
							y={y + blockHeight / 2}
							textAnchor="middle"
							alignmentBaseline="middle"
							fontSize="10"
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

