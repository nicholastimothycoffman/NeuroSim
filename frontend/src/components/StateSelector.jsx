import React from 'react'

const states = ['stress', 'fatigue', 'flow', 'caffeine', 'exercise']

const StateSelector = ({ selectedState, onChange }) => (
	<div>
		<label htmlFor="state" className="text-lg font-semibold mr-2">Choose State:</label>
		<select
			id="state"
			value={selectedState}
			onChange={(e) => onChange(e.target.value)}
			className="text-black px-2 py-1 rounded"
		>
			{states.map((state) => (
				<option key={state} value={state}>{state.charAt(0).toUpperCase() + state.slice(1)}</option>
			))}
		</select>
	</div>
)


export default StateSelector
