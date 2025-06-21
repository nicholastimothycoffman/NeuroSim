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

	const svgWidth = 150
	const svgHeight = 150
	const cx = svgWidth / 2
	const cy = svgHeight / 2
	const radius = 50
	const angleStep = (2 * Math.PI) / modules.length

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
				const x = cx + radius * Math.cos(angle)
				const y = cy + radius * Math.sin(angle)
				const color = getFillColor(mod.activation)

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
							r="4"
							fill={color}
							style={{ transition: 'fill 0.3s ease-in-out' }}
						>
							<title>{`${mod.name.replace(/_/g, ' ')}: ${mod.activation}`}</title>
						</circle>
						<text
							x={x}
							y={y + (Math.sin(angle) > 0 ? 8 : -6)}
							textAnchor="middle"
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

export default RadialConnectome

