import React, { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { AsciiEffect } from 'three-stdlib';

const AsciiRenderer = ({ renderIndex = 1, characters = ' .:-+*=%@#', ...options }) => {
  const { gl, size, scene, camera } = useThree();
  
  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, options)
    effect.domElement.style.position = 'absolute';
    effect.domElement.style.top = '0px';
    effect.domElement.style.left = '0px';
    effect.domElement.style.color = 'white';
    effect.domElement.style.backgroundColor = '#111111';
    effect.domElement.style.pointerEvents = 'none';
    return effect;
  }, [characters, options.invert]);

  useEffect(() => {
    gl.domElement.parentNode.appendChild(effect.domElement)
    return () => gl.domElement.parentNode.removeChild(effect.domElement)
  }, [effect]);

  useEffect(() => {
    effect.setSize(size.width, size.height)
  }, [effect, size]);

  useFrame((state) => {
    effect.render(scene, camera)
  }, renderIndex);
}

const AsciiTorus = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    // Animation
    // meshRef.current.rotation.x += 0.004;
    // meshRef.current.rotation.y += 0.004;
    // meshRef.current.rotation.z += 0.0001;
  });

  return (
    <mesh ref={meshRef}>
        <torusGeometry args={[1.4, 1, 30, 100]} />
        <meshStandardMaterial color='white' />
        <OrbitControls />
        <AsciiRenderer invert />
    </mesh>
  );
}

export default AsciiTorus;