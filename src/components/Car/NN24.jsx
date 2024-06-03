// src/components/Car.js
import React, { useEffect, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useThree } from '@react-three/fiber'

const Car = ({ url, position, rotation, scale }) => {
  const { scene } = useThree()
  const carRef = useRef()

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(url, (gltf) => {
      carRef.current = gltf.scene
      scene.add(gltf.scene)
    })
  }, [url, scene])

  return null
}

export default Car
