import React from 'react'

const cognitiveStates = [
  'stress',
  'mental_fatigue',
  'sleep_deprivation',
  'intoxication',
  'caffeination',
  '"flow"',
  'meditation',
  'cardiovascular_exercise',
  'a_full_nights_rest',
  'anxiety',
  'depression',
  'euphoria',
  'frustration',
  'hypnosis',
  'lucid_dreaming',
  'psychadelic_states',
  'dissociation',
  'hyperfocus',
  'cognitive_overload',
  'creative_ideation',
  'physical_fatigue',
  'fasting_caloric_restriction',
  'high_blood_glucose_sugar_crash',
  'neuroinflammation',
  'pain',
  'stage_fright_performance_anxiety',
  'groupthink_conformity_pressure',
  'digital_overstimulation_screen_fatigue',
  'immersive_vr_augmented_reality_experiences'
]

const StateSelector = ({ selectedState, onChange }) => {
	return (
		<div className="mb-4">
			<label htmlFor="state-select" className="block mb-1 font-medium">
				Choose Cognitive State:
			</label>
			<select
				id="state-select"
				value={selectedState}
				onChange={(e) => onChange(e.target.value)}
				className="w-full bg-zinc-700 text-white p-2 rounded"
			>
				{cognitiveStates.map((state) => (
					<option key={state} value={state}>
						{state.replace(/_/g, ' ')}
					</option>
				))}
			</select>
		</div>
	)
}

export default StateSelector

