import React from 'react'

// Utility to determine fill color based on activation
const getFillColor = (activation) => {
	if (activation > 0.75) return '#ef4444' // red
	if (activation > 0.4) return '#facc15'  // yellow
	return '#3b82f6'                        // blue
}

const RadialConnectome = ({ data }) => {
	const modules = data?.ai_modules || []

	if (!modules.length) {
		return <p>No AI module data available.</p>
	}

	const svgWidth = 1200 // Drastically increase from 600
	// Add extra padding to the top of the SVG
	const svgHeight = 1440 // Increased from 1240 to add more vertical space
	const topPadding = 120 // Increased from 40
	const cx = svgWidth / 2
	const cy = svgHeight / 2 + topPadding / 2 // Shift center down by half the padding
	const outerRadius = 520 // Drastically increase from 260
	const angleStep = (2 * Math.PI) / modules.length
	const nodeRadius = 80 // Increased from 60
	const textFontSize = 88 // Increased from 68

	return (
		<svg
			viewBox={`0 0 ${svgWidth} ${svgHeight}`}
			className="w-full h-full object-contain"
			preserveAspectRatio="xMidYMid meet"
		>
			{/* Central node */}
			<circle cx={cx} cy={cy} r="3" fill="#d1d5db">
				<title>AI Core</title>
			</circle>

			{/* Radial nodes and connections */}
			{modules.map((mod, i) => {
				const angle = i * angleStep
				const x = cx + outerRadius * Math.cos(angle)
				const y = cy + outerRadius * Math.sin(angle)
				const color = getFillColor(mod.activation)

				// Custom label offset for all nodes, with special handling for leftmost and bottommost
				let labelOffset = 60 // Standard offset for most nodes
				const epsilon = 0.01;
				const isLeftmost = Math.abs(Math.cos(angle) + 1) < epsilon;
				const isBottommost = Math.abs(Math.sin(angle) - 1) < epsilon;
				let xLabel = x;
				let yLabel = y;
				if (isLeftmost) {
					xLabel = x - nodeRadius - labelOffset;
				} else if (isBottommost) {
					yLabel = y + nodeRadius + labelOffset;
				} else if (Math.sin(angle) > 0) {
					yLabel = y + nodeRadius + labelOffset;
				} else {
					yLabel = y - nodeRadius - labelOffset;
				}

				return (
					<g key={mod.name}>
						<line
							x1={cx}
							y1={cy}
							x2={x}
							y2={y}
							stroke="#6b7280"
							strokeWidth="0.5"
						/>
						<circle
							cx={x}
							cy={y}
							r={nodeRadius}
							fill={color}
							style={{ transition: 'fill 0.3s ease-in-out' }}
						>
							<title>{`${mod.name.replace(/_/g, ' ')}: ${mod.activation}`}</title>
						</circle>
						<text
							x={xLabel}
							y={yLabel}
							textAnchor={isLeftmost ? "end" : "middle"}
							fontSize={textFontSize}
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

export default RadialConnectome

