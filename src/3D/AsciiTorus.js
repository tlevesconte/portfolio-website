import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const AsciiTorus = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    // meshRef.current.rotation.x += 0.004;
    meshRef.current.rotation.y += 0.004;
    // meshRef.current.rotation.z += 0.0001;
  });

  return (
    <mesh ref={meshRef}>
        <torusGeometry args={[1.4, 1, 30, 100]}/>
        <meshStandardMaterial color="black" wireframe/>
    </mesh>
  );
}

export default AsciiTorus;