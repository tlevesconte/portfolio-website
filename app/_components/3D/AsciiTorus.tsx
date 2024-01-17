import React, { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { AsciiEffect } from "three-stdlib";

// Constants for readability
const ASCII_CHARACTERS = " .:-+*=%@#";
const ASCII_OPTIONS = {
  /* your options here */
  resolution: 0.175,
};

interface AsciiRendererProps {
  renderIndex?: number;
}

const AsciiRenderer: React.FC<AsciiRendererProps> = ({ renderIndex = 1 }) => {
  const { gl, size, scene, camera } = useThree();

  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, ASCII_CHARACTERS, ASCII_OPTIONS);
    effect.domElement.style.position = "absolute";
    effect.domElement.style.top = "0px";
    effect.domElement.style.left = "0px";
    effect.domElement.style.color = "white";
    effect.domElement.style.backgroundColor = "#111111";
    effect.domElement.style.borderRadius = "0.25rem";
    effect.domElement.style.pointerEvents = "none";
    return effect;
  }, [ASCII_OPTIONS.resolution]);

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

  useFrame(() => {
    effect.render(scene, camera);
  }, renderIndex);

  return null;
};

const AsciiTorus: React.FC = () => {
  const meshRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x = meshRef.current.rotation.y += delta / 5;
    meshRef.current.rotation.y = meshRef.current.rotation.x += delta / 5;
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[2, 0.9, 30, 100]} />
      <meshStandardMaterial />
      <AsciiRenderer />
    </mesh>
  );
};

export default AsciiTorus;
