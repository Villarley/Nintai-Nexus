"use client"
import Image from "next/image"
import kleemax from "@next/font/local"
import { IBM_Plex_Sans } from "next/font/google"
import { Hero, Sponsors, CarDetails } from "@/components/"
import { Navbar } from "@/components/Navbar"
import { NintaiTitle } from "@/assets/Bgs"

const Kleemax = kleemax({
  src: "../assets/fonts/Kleemax.ttf",
  variable: "--font-kleemax"
})

const IBM_Plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ibm"
})

export default function Home() {
  return (
    <>
      <Hero>
        <Navbar />
        <div className="flex h-[87%] flex-col justify-around p-6">
          <Image className="md:m-6" width={500} height={300} alt="" src={NintaiTitle}></Image>
          <h2 className={`${IBM_Plex.variable} font-Ibm text-5xl text-center`}>Redisigning the <span className=" text-[#6600FF]">limits</span></h2>
        </div>
      </Hero>
      <Sponsors/>
      <CarDetails/>
    </>
  )
}
