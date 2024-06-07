// src/app/car/page.jsx
"use client"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Logo } from '@/components'
import { TextEngine } from "@/components/animations"
import { Isotype } from "@/assets/Logos"
import Image from 'next/image'
import Link from 'next/link'

const CarCanvas = dynamic(() => import('@/components/Car/Carcanvas'), { ssr: false })

const soundPath = "/sounds/extendedSound.wav"

export default function Page() {
  const [showMainPage, setShowMainPage] = useState(false)

  const handleAnimationEnd = () => {
    setShowMainPage(true)
  }
  
  return (
    <div>
      {showMainPage ? (
        <Car />
      ) : (
        <Logo onAnimationEnd={handleAnimationEnd} />
      )}
    </div>
  )
}
function Car(){
  const text1 = "Presenting the "
  const text2 = "NN24"
  return(
    <>
      <div className="h-screen bg-white overflow-y-hidden">
  <div className="p-4">
   <div className="flex justify-center">
     <div className="flex justify-start">
     <Link href="/">
       <Image src={Isotype} height={60} alt=""/>
     </Link>
     </div>
     <div className="w-full flex justify-center">
   <TextEngine>
                 {text1.split('').map((char, index) => (
               <span
                 key={`text1-${index}`}
                 className={`${char === ' ' ? 'space' : ''} IBM_Plex font-Ibm text-3xl md:text-5xl text-center text-black`}
               >
                 {char === ' ' ? '\u00A0' : char}
               </span>
             ))}
                           {text2.split('').map((char, index) => (
               <span
                 key={`text2-${index}`}
                 className={`${char === ' ' ? 'space' : ''} IBM_Plex font-Ibm text-3xl md:text-5xl text-center text-[#6600FF] shadow-lg`}
               >
                 {char === ' ' ? '\u00A0' : char}
               </span>
             ))}
     </TextEngine>
     </div>
   {/* <div className="p-2 text-black text-center">Drag to see</div> */}
   </div>
  </div>
   <CarCanvas />
 </div></>
  )

}