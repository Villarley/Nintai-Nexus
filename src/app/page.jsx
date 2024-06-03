"use client"
import React , { useState } from "react"
import Image from "next/image"
import kleemax from "@next/font/local"
import { IBM_Plex_Sans } from "next/font/google"
import { Hero, Sponsors, CarDetails, Values, Footer, AboutUs } from "@/components/"
import { Navbar } from "@/components/Navbar"
import { TeamCarousel } from '@/components/'
import { NintaiTitle } from "@/assets/Bgs"
import { TextEngine } from "@/components/animations"
import { Logo } from "@/components"

const Kleemax = kleemax({
  src: "../assets/fonts/Kleemax.ttf",
  variable: "--font-kleemax"
})

const IBM_Plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ibm"
})
const App = () => {
  const [showMainPage, setShowMainPage] = useState(false)

  const handleAnimationEnd = () => {
    setShowMainPage(true)
  }

  return (
    <div>
      {showMainPage ? (
        <Home />
      ) : (
        <Logo onAnimationEnd={handleAnimationEnd} />
      )}
    </div>
  )
}
function Home() {
  const text1 = "Redisigning the "
  const text2 = " limits"
  return (
    <>
      <Hero>
        <Navbar />
        <div className="flex h-[87%] flex-col justify-around p-6">
          <Image className="md:m-6" width={500} height={300} alt="" src={NintaiTitle}></Image>
            <TextEngine>
                  {text1.split('').map((char, index) => (
                <span
                  key={`text1-${index}`}
                  className={`${char === ' ' ? 'space' : ''} IBM_Plex font-Ibm text-5xl md:text-5xl text-center text-Bone`}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
              {text2.split('').map((char, index) => (
                <span
                  key={`text2-${index}`}
                  className={`${char === ' ' ? 'space' : ''} IBM_Plex font-Ibm text-5xl md:text-5xl text-center text-[#6600FF] shadow-lg`}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </TextEngine>
        </div>
      </Hero>
      <Sponsors/>
      <CarDetails/>
      <Values/>
      <TeamCarousel/>
      <AboutUs/>
      <Footer/>
    </>
  )
}
export default App

