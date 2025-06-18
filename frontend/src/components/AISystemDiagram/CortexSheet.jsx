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

	const width = 300
	const height = 180
	const waveAmplitude = 30
	const spacing = width / (modules.length + 1)

	return (
		<svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
			{/* Optional background wave path */}
			<path
				d={modules.map((_, i) => {
					const x = spacing * (i + 1)
					const y = height / 2 + Math.sin(i) * waveAmplitude
					return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
				}).join(' ')}
				fill="none"
				stroke="#4b5563"
				strokeWidth="1"
			/>

			{/* Modules on the wave */}
			{modules.map((mod, i) => {
				const x = spacing * (i + 1)
				const y = height / 2 + Math.sin(i) * waveAmplitude

				return (
					<g key={mod.name}>
						<circle
							cx={x}
							cy={y}
							r="10"
							fill={getFillColor(mod.activation)}
							stroke="#ffffff"
							strokeWidth="1"
							style={{ transition: 'fill 0.3s ease-in-out' }}
						>
							<title>{mod.name.replace(/_/g, ' ')}</title>
						</circle>
						<text
							x={x}
							y={y + 18}
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

export default CortexSheet

