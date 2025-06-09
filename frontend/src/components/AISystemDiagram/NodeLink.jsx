import React from 'react'

const NodeLink = ({ modules }) => {
	console.log('Rendering NodeLink with modules:', modules)

	if (!Array.isArray(modules)) {
		return <text x="10" y="20" fill="red">Invalid module data</text>
	}

	return (
		<svg viewBox="0 0 300 100" className="w-full h-auto">
			<text x="20" y="50" fill="white" fontSize="16">[Node-Link View Placeholder]</text>
		</svg>
	)
}

export default NodeLink

