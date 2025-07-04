import React from 'react'
import { normalizeName } from '../../utils/dataUtils'

const brainOutlinePath = "M 60 100 C 60 40, 240 40, 240 100 C 240 160, 60 160, 60 100 Z"

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
	if (activation > 0.75) return '#ef4444'
	if (activation > 0.4) return '#facc15'
	return '#3b82f6'
}

const LateralView = ({ regions }) => {
	return (
		<svg viewBox="0 0 300 200" className="w-full h-auto">
			<path
				d={brainOutlinePath}
				fill="#1f2937"
				stroke="#9ca3af"
				strokeWidth="2"
			/>
			{regions.map((region) => {
				const key = region.name.replace(/\s+/g, '_').toLowerCase()
				const pos = regionPositions[key]
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

