"use client"
import nebula from '@next/font/local'
import kleemax from '@next/font/local'
import { IBM_Plex_Sans } from 'next/font/google'
import { Hero } from "@/components/"
import { Navbar } from "@/components/Navbar"

const Kleemax = kleemax({
  src: '../assets/fonts/Kleemax.ttf',
  variable: '--font-kleemax'
})

const IBM_Plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ibm'
})

export default function Home() {

  return (
    <>
      <Hero>
        <Navbar />
      </Hero>
    </>
  )
}
