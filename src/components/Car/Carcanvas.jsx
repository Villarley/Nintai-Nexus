// src/components/CarCanvas.jsx
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { Leva, useControls } from 'leva'
import Car from './NN24'
import CanvasLoader from "./NN24Loader"

extend({ OrbitControls })

const CarCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
  <>


    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
      className="flex justify-center"
    >
      {/* Ambient Light for uniform lighting */}
      <ambientLight intensity={10.0} color="white" />

      {/* Optionally, you can add a directional light to create some shadows and depth */}
      <directionalLight
        intensity={3}
        position={[10, 20, -50]}
        
      />
      <directionalLight
        intensity={3}
        position={[10, 20, 50]}
        
      />
      <directionalLight
        intensity={3}
        position={[10, 2000, 50]}
        
      />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Car url="/models/NN24v4.glb" 
             
        />
      </Suspense>
      <Preload all />
    </Canvas>
  </>
  )
}

export default CarCanvas