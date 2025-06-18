import React from 'react'

// Reuse color logic for consistency
const getFillColor = (activation) => {
	if (activation > 0.75) return '#ef4444' // red-400
	if (activation > 0.4) return '#facc15'  // yellow-400
	return '#3b82f6'                        // blue-500
}

const NodeLink = ({ data }) => {
	const modules = data?.ai_modules || []

	if (!modules.length) {
		return <p>No AI module data available.</p>
	}

	const radius = 12
	const svgWidth = 300
	const svgHeight = 200
	const spacing = svgWidth / (modules.length + 1)

	return (
		<svg
			viewBox={`0 0 ${svgWidth} ${svgHeight}`}
			className="w-full h-full max-w-full max-h-full border border-pink-500"
			preserveAspectRatio="xMidYMid meet"
		>
			{/* Connecting lines */}
			{modules.map((_, idx) => {
				if (idx === 0) return null
				const prevX = spacing * idx
				const x = spacing * (idx + 1)
				const y = svgHeight / 2
				return (
					<line
						key={`line-${idx}`}
						x1={prevX}
						y1={y}
						x2={x}
						y2={y}
						stroke="#9ca3af"
						strokeWidth="1"
					/>
				)
			})}

			{/* Nodes */}
			{modules.map((mod, idx) => {
				const x = spacing * (idx + 1)
				const y = svgHeight / 2

				return (
					<g key={mod.name}>
						<circle
							cx={x}
							cy={y}
							r={radius}
							fill={getFillColor(mod.activation)}
							stroke="#ffffff"
							strokeWidth="1"
							style={{ transition: 'fill 0.3s ease-in-out' }}
						>
							<title>{mod.name.replace(/_/g, ' ')}</title>
						</circle>
						<text
							x={x}
							y={y + radius + 15}
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

export default NodeLink

