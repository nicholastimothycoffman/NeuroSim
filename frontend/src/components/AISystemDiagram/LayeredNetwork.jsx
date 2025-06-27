import React from 'react'

// Determine node color based on activation
const getFillColor = (activation) => {
	if (activation > 0.75) return '#ef4444' // red
	if (activation > 0.4) return '#facc15'  // yellow
	return '#3b82f6'                        // blue
}

const LayeredNetwork = ({ data }) => {
	const modules = data?.ai_modules || []

	if (!modules.length) {
		return <p>No AI module data available.</p>
	}

	// Assign modules randomly to 3 layers
	const layerCount = 3
	const layers = Array.from({ length: layerCount }, () => [])
	modules.forEach((mod, i) => {
		layers[i % layerCount].push(mod)
	})

	// To elongate the links, increase svgWidth and svgHeight, and increase layerSpacing and vertical spacing
	const dynamicWidth = Math.min(3200, 1600 + modules.length * 100) // Increased from 2400, 1200
	const svgWidth = dynamicWidth
	const svgHeight = 1600 // Increased from 1200
	const layerSpacing = svgWidth / (layerCount + 1)
	const nodeRadius = 72 // Increased from 56
	const textFontSize = 80 // Increased from 64

	// Compute positions
	const positions = {}
	const getNodePos = (layerIndex, nodeIndex, nodesInLayer) => {
		const x = layerSpacing * (layerIndex + 1)
		const spacing = svgHeight / (nodesInLayer + 1) * 1.3
		const y = spacing * (nodeIndex + 1)
		return { x, y }
	}

	layers.forEach((layer, i) => {
		layer.forEach((mod, j) => {
			positions[mod.name] = getNodePos(i, j, layer.length)
		})
	})

	return (
		<svg
			viewBox={`0 0 ${svgWidth} ${svgHeight}`}
			className="w-full h-full object-contain"
			preserveAspectRatio="xMidYMid meet"
		>
			{/* Connections */}
			{layers.slice(0, -1).map((layer, i) => {
				const nextLayer = layers[i + 1]
				return layer.flatMap((from) =>
					nextLayer.map((to) => {
						const fromPos = positions[from.name]
						const toPos = positions[to.name]
						return (
							<line
								key={`${from.name}->${to.name}`}
								x1={fromPos.x}
								y1={fromPos.y}
								x2={toPos.x}
								y2={toPos.y}
								stroke="#6b7280"
								strokeWidth="0.5"
							/>
						)
					})
				)
			})}

			{/* Nodes */}
			{modules.map((mod) => {
				const { x, y } = positions[mod.name]
				return (
					<g key={mod.name}>
						<circle
							cx={x}
							cy={y}
							r={nodeRadius}
							fill={getFillColor(mod.activation)}
							style={{ transition: 'fill 0.3s ease-in-out' }}
						>
							<title>{`${mod.name.replace(/_/g, ' ')}: ${mod.activation}`}</title>
						</circle>
						<text
							x={x}
							y={y + (mod.name.length % 2 === 0 ? nodeRadius + 60 : -nodeRadius - 60)}
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

export default LayeredNetwork

