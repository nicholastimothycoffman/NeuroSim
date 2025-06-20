import React from 'react'

// Shared color logic
const getFillColor = (activation) => {
	if (activation > 0.75) return '#ef4444' // red
	if (activation > 0.4) return '#facc15'  // yellow
	return '#3b82f6'                        // blue
}

const CortexSheet = ({ data }) => {
	const modules = data?.ai_modules || []

	if (!modules.length) {
		return <p>No AI module data available.</p>
	}

	// Relative viewBox size
	const svgWidth = 100
	const svgHeight = 50
	const waveAmplitude = 10
	const spacing = svgWidth / (modules.length + 1)
	const radius = 3.5

	return (
		<svg
			viewBox={`0 0 ${svgWidth} ${svgHeight}`}
			className="w-full h-full object-contain"
			preserveAspectRatio="xMidYMid meet"
		>
			{/* Optional background wave path */}
			<path
				d={modules.map((_, i) => {
					const x = spacing * (i + 1)
					const y = svgHeight / 2 + Math.sin(i) * waveAmplitude
					return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
				}).join(' ')}
				fill="none"
				stroke="#4b5563"
				strokeWidth="0.5"
			/>

			{/* Modules on the wave */}
			{modules.map((mod, i) => {
				const x = spacing * (i + 1)
				const y = svgHeight / 2 + Math.sin(i) * waveAmplitude

				return (
					<g key={mod.name}>
						<circle
							cx={x}
							cy={y}
							r={radius}
							fill={getFillColor(mod.activation)}
							stroke="#ffffff"
							strokeWidth="0.5"
							style={{ transition: 'fill 0.3s ease-in-out' }}
						>
							<title>{mod.name.replace(/_/g, ' ')}</title>
						</circle>
						<text
							x={x}
							y={y + radius + 2.5}
							textAnchor="middle"
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

export default CortexSheet

