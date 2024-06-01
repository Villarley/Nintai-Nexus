"use client"

import React, {Suspense, useEffect, useState} from "react";
import {Canvas, extend, useLoader} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF,} from "@react-three/drei"
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
extend ({OrbitControls})

import CanvasLoader from "../components/NN24Loader"


const Car =({url}) => {
  const gltf = useLoader(GLTFLoader, url)

  return <primitive object={gltf}/>

}


export default Car