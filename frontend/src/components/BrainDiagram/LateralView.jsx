import React from 'react'

const regionPositions = {
	prefrontal_cortex: { x: 80, y: 60 },
	amygdala: { x: 60, y: 140 },
	hippocampus: { x: 90, y: 160 },
	motor_cortex: { x: 120, y: 100 },
	visual_cortex: { x: 200, y: 120 },
	default_mode_network: { x: 150, y: 80 }
}

const getFillColor = (activation) => {
	if (activation > 0.75) return '#ef4444' // red-400
	if (activation > 0.4) return '#facc15'  // yellow-400
	return '#3b82f6'                        // blue-500
}

const LateralView = ({ regions }) => {
	return (
		<svg viewBox="0 0 300 200" className="w-full h-auto">
			{/* Placeholder brain outline */}
			<ellipse
				cx="150"
				cy="100"
				rx="130"
				ry="80"
				fill="#1f2937"
				stroke="#9ca3af"
				strokeWidth="2"
			/>

			{/* Dynamic region nodes */}
			{regions.map((region) => {
				const pos = regionPositions[region.name]
				if (!pos) return null

				return (
					<circle
						key={region.name}
						cx={pos.x}
						cy={pos.y}
						r="10"
						fill={getFillColor(region.activation)}
					>
						<title>{`${region.name}: ${region.activation}`}</title>
					</circle>
				)
			})}
		</svg>
	)
}

export default LateralView

