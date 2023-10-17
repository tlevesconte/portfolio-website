"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { AsciiEffect } from "three-stdlib";

interface AsciiRendererProps {
  renderIndex?: number;
  characters?: string;
  invert?: boolean;
}

const AsciiRenderer: React.FC<AsciiRendererProps> = ({
  renderIndex = 1,
  characters = " .:-+*=%@#",
  ...options
}: AsciiRendererProps) => {
  const { gl, size, scene, camera } = useThree();

  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, options);
    effect.domElement.style.position = "absolute";
    effect.domElement.style.top = "0px";
    effect.domElement.style.left = "0px";
    effect.domElement.style.color = "white";
    effect.domElement.style.backgroundColor = "#111111";
    effect.domElement.style.pointerEvents = "none";
    return effect;
  }, [characters, options.invert]);

  useEffect(() => {
    gl.domElement.parentNode?.appendChild(effect.domElement);
    return () => {
      if (gl.domElement.parentNode) {
        gl.domElement.parentNode.removeChild(effect.domElement);
      }
    };
  }, [effect, gl.domElement.parentNode]);
  

  useEffect(() => {
    effect.setSize(size.width, size.height);
  }, [effect, size]);

  useFrame((state) => {
    effect.render(scene, camera);
  }, renderIndex);

  return null;
};

const AsciiTorus: React.FC = () => {
  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    const rotationSpeedY = 0.004 + (Math.random() - 0.5) * 0.00005;
    meshRef.current.rotation.y += rotationSpeedY;
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[2, .9, 30, 100]} />
      <meshStandardMaterial />
      <AsciiRenderer />
    </mesh>
  );
};

export default AsciiTorus;
