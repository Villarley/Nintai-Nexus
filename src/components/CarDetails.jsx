import React from 'react'
import nebula from "@next/font/local"
const Nebula = nebula({
    src: '../assets/fonts/Nebula-Regular.otf',
    variable: '--font-nebula'
  })

export default function CarDetails() {
  return (
    <div className="bg-Bone flex justify-center">
        <h1 className={`${Nebula.variable} font-Nebula`}>Car</h1>
    </div>
  )
}
