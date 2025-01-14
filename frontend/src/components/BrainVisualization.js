import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const BrainVisualization = ({ data }) => {
	const mesh = useRef();

	// Rotation state
	const [rotation, setRotation] = useState([0, 0, 0]);

	// Rotate the model on frame updates
	const animate = () => {
		setRotation([rotation[0] + 0.01, rotation[1] + 0.01, rotation[2]]);
	};

	return (
		<Canvas onCreated={({ gl}) => {
			gl.shadowMap.enabled = true;
			gl.shadowMap.type = TREEPCFSoftShadowMap;
		}}>
			<ambientLight intensity={0.5} />
			<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
			<mesh
				ref={mesh}
				position={[0, 0, 0]}
				rotation={rotation}
				onPointerOver={(e) => console.log("Hovered")}
				onPointerOut={(e) => console.log("Unhovered")}
				onClick={(e) => console.log("Clicked")}
				animate={animate}
			>
				<boxGeometry args={[2, 2, 2]} />
				<meshStandardMaterial color={'orange'} />
			</mesh>
			<OrbitControls />
		</Canvas>
	);
};

export default BrainVisualization;
