// components/STLModel.js
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useLoader } from '@react-three/drei'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

function STLModel({ path }) {
  const geometry = useLoader(STLLoader, path)

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="gray" />
    </mesh>
  )
}

const STLModelViewer = ({ path }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <STLModel path={path} />
      <OrbitControls />
    </Canvas>
  )
}

export default STLModelViewer
