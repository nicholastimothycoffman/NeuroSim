import React from 'react'

const regionPositions = {
	prefrontal_cortex: { x: 80, y: 60 },
	amygdala: { x: 130, y: 140 },
	hippocampus: { x: 150, y: 160 },
	thalamus: { x: 140, y: 120 },
	hypothalamus: { x: 145, y: 135 },
	anterior_cingulate: { x: 100, y: 90 },
	default_mode_network: { x: 120, y: 75 },
	reticular_formation: { x: 170, y: 150 }
}

const getFillColor = (activation) => {
	if (activation > 0.75) return '#ef4444' // red-400
	if (activation > 0.4) return '#facc15'  // yellow-400
	return '#3b82f6'                        // blue-500
}

const MedialView = ({ regions }) => {
	return (
		<svg viewBox="0 0 300 200" className="w-full h-auto">
			{/* Placeholder brain silhouette */}
			<path
				d="M 60 100 C 60 40, 240 40, 240 100 C 240 160, 60 160, 60 100 Z"
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

export default MedialView

