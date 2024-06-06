// src/app/car/page.jsx
"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const CarCanvas = dynamic(() => import('@/components/Car/Carcanvas'), { ssr: false })

export default function Page() {
  return (
    <>
    <div className="h-screen bg-white">
      <CarCanvas />
    </div>
    </>
  )
}
