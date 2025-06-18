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

	const cx = 150
	const cy = 150
	const radius = 100
	const angleStep = (2 * Math.PI) / modules.length

	return (
		<svg viewBox="0 0 300 300" className="w-full h-auto">
			{/* Central node */}
			<circle cx={cx} cy={cy} r="8" fill="#d1d5db">
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
						{/* Connecting line */}
						<line
							x1={cx}
							y1={cy}
							x2={x}
							y2={y}
							stroke="#6b7280"
							strokeWidth="1"
						/>
						{/* Module node */}
						<circle
							cx={x}
							cy={y}
							r="10"
							fill={color}
							style={{ transition: 'fill 0.3s ease-in-out' }}
						>
							<title>{`${mod.name.replace(/_/g, ' ')}: ${mod.activation}`}</title>
						</circle>
						{/* Label */}
						<text
							x={x}
							y={y - 14}
							textAnchor="middle"
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

export default RadialConnectome

