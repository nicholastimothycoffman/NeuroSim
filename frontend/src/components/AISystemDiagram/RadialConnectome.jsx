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
	const svgHeight = 1240 // Increased from 1200 to add 40px padding at the top
	const topPadding = 40
	const cx = svgWidth / 2
	const cy = svgHeight / 2 + topPadding / 2 // Shift center down by half the padding
	const outerRadius = 520 // Drastically increase from 260
	const angleStep = (2 * Math.PI) / modules.length
	const nodeRadius = 60 // Increased from 48
	const textFontSize = 68 // Increased from 56

	return (
		<svg
			viewBox="0 0 200 50"
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

				// Custom label offset for topmost and bottommost nodes and specific modules
				let labelOffset = 18
				if (mod.name === 'multitasking_load') {
					labelOffset = 40 // Reduced from 80 to prevent clipping
				} else if (mod.name === 'threat_analysis') {
					labelOffset = 80 // Keep this for upward spacing
				} else if (Math.abs(Math.sin(angle)) < 0.01) { // Top or bottom node
					if (Math.cos(angle) > 0) {
						labelOffset = 4 // Top node
					} else {
						labelOffset = 60 // Bottom node
					}
				}
				const yLabel = y + (mod.name === 'multitasking_load' || Math.sin(angle) > 0 ? nodeRadius + labelOffset : -nodeRadius - (mod.name === 'threat_analysis' ? labelOffset : labelOffset))

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
							x={x}
							y={yLabel}
							textAnchor="middle"
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

