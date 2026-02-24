import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Nucleotide = (props: any) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={mesh} {...props}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color={props.color} roughness={0.1} metalness={0.8} transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

export const BioBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ec4899" />
        
        {Array.from({ length: 20 }).map((_, i) => (
          <Nucleotide 
            key={i} 
            position={[
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 10
            ]}
            color={Math.random() > 0.5 ? "#3b82f6" : "#10b981"}
          />
        ))}
        <Environment preset="city" />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-slate-900/80 to-slate-900/90 backdrop-blur-[2px]" />
    </div>
  );
};
