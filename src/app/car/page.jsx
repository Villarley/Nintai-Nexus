"use client"
import Car from "@/components/NN24";
import React, {Suspense, useEffect, useState} from "react";
import {Canvas, extend, useLoader} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF,} from "@react-three/drei"
extend ({OrbitControls})

import CanvasLoader from "@/components/NN24Loader"

export default function Home() {
    return (
      <>
        <CarCanvas/>
       
      </>
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
        <Suspense fallback={CanvasLoader}>
          <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          />
          <Car url="//public/models/NN2024v12.gltf"/>
        </Suspense>
    
        <Preload all/>
    </Canvas>
    )
  }    