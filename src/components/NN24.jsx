import React, {Suspense, useEffect, useState} from "react";
import {Canvas, extend} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF, Html} from "@react-three/drei"
extend ({OrbitControls})

import CanvasLoader from "../components/NN24Loader"


const Car =({isMobile}) => {
  const car = useGLTF("../assets/models/NN2024v12.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black'/>
      <spotLight
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={0}
      intensity={1.75}
      castShadow = {true}
      shadow-mapSize={1024}
      />
      <pointLight intensity={2}/>
      <primitive
        object={car.scene}
        scale={isMobile ? 0.7 : 1.85}
        position={isMobile ? [0, -3, -2.2] : [0, -3.5, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )

}

const CarCanvas = () => {

const [isMobile, setIsMobile] = useState(false)

useEffect(() => {

  const mediaQuery = window.matchMedia("(max-width: 500px)")

  setIsMobile(mediaQuery.matches)

  const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches)
  }

  mediaQuery.addEventListener("change", handleMediaQueryChange)

  return() => {
    mediaQuery.removeEventListener("change", handleMediaQueryChange)
  }

}, [])

return(
  <Canvas
    frameloop="demand"
    shadows
    dpr={[1,2]}
    camera={{position: [20,3,5], fov:35}}
    gl={{preserveDrawingBuffer: true}}
  >
    <Suspense >
      <OrbitControls
      enableZoom={false}
      enablePan={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      />
      <Car isMobile={isMobile}/>
    </Suspense>

    <Preload all/>
</Canvas>
)

}

export default CarCanvas