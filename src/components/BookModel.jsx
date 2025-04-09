import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

const Book = () => {
  // Load textures for the cover and pages
  const coverTexture = useTexture('/leather.jpg'); // Replace with your texture path
  const pageTexture = useTexture('/paper.png'); // Replace with your texture path

  return (
    <group>
      {/* Book Spine */}
      <mesh position={[-0.8, 0, 0]}>
        <boxGeometry args={[0.2, 1, 1.4]} />
        <meshStandardMaterial color="#4a3f35" />
      </mesh>

      {/* Front Cover */}
      <mesh position={[0.3, 0, 0.7]}>
        <boxGeometry args={[1, 1, 0.1]} />
        <meshStandardMaterial map={coverTexture} />
      </mesh>

      {/* Back Cover */}
      <mesh position={[0.3, 0, -0.7]}>
        <boxGeometry args={[1, 1, 0.1]} />
        <meshStandardMaterial map={coverTexture} />
      </mesh>

      {/* Pages */}
      <mesh position={[0.3, 0, 0]}>
        <boxGeometry args={[1, 1, 1.2]} />
        <meshStandardMaterial map={pageTexture} />
      </mesh>

      {/* Page Edges */}
      <mesh position={[0.3, 0, 0.6]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[1.1, 0.05, 1.2]} />
        <meshStandardMaterial color="#dcdcdc" />
      </mesh>
    </group>
  );
};

const BookModel = () => {
  return (
    <Canvas style={{ height: 500 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Book />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default BookModel;