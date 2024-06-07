// components/FBXModel.js
import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useLoader } from "@react-three/drei"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"

function FBXModel({ path }) {
  const fbx = useLoader(FBXLoader, path)

  return <primitive object={fbx} />
}

const FBXModelViewer = ({ path }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <FBXModel path={path} />
      <OrbitControls />
    </Canvas>
  )
}

export default FBXModelViewer
