import { useFrame } from '@react-three/fiber';
import React, { useRef, useMemo } from 'react'

// Shaders
import fragmentShader from './shaders/fragmentShader';
import vertexShader from './shaders/vertexShader';

const IcosahedronDisplacement = () => {
  const meshRef = useRef();

  const uniforms = useMemo(() => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    meshRef.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();
    meshRef.current.material.uniforms.u_intensity.value = 0.4
  });
  
  return (
    <mesh 
      ref={meshRef}
      position={[0, 0, 0]}
      scale={1.5}
      >
        <icosahedronGeometry args={[2.2, 20]} />
        <shaderMaterial 
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms} 
          wireframe={false}
        />
    </mesh>
  )
}

export default IcosahedronDisplacement