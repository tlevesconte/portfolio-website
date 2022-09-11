import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

const Cube = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (!meshRef.current) {
        return;
      }

      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
  });
  
  return (
    <mesh ref={meshRef}>
        <ambientLight />
        <boxGeometry />
        <meshStandardMaterial color='blue' />
    </mesh>
  )
}

export default Cube