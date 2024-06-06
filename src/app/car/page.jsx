// src/app/car/page.jsx
"use client"
import React from 'react'
import { Nebula } from "@/components/Text";
import dynamic from 'next/dynamic'

const CarCanvas = dynamic(() => import('@/components/Car/Carcanvas'), { ssr: false })

export default function Page() {
  return (
    <>
    <div className="h-screen bg-white">
      <h1 className="text-3xl text-black text-center"><Nebula>Presenting the NN24</Nebula></h1>
      <CarCanvas />
    </div>
    </>
  )
}
