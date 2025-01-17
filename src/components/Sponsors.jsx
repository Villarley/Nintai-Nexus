"use client"
import React from "react"
import Image from "next/image"
import { Ricoh, Sauber, GTW, ItalianImportRacing } from "@/assets/sponsors/"
import nebula from "@next/font/local"
import Link from "next/link"

const Nebula = nebula({
  src: '../assets/fonts/Nebula-Regular.otf',
  variable: '--font-nebula'
})

const SponsorsData = [
  {
    Img: Sauber,
    Dir: "https://www.sauber-water.com/",
    Name: "Sauber"
  },
  {
    Img: Ricoh,
    Dir: "https://www.ricoh.com/",
    Name: "Ricoh"
  },
  {
    Img: GTW,
    Dir: "https://www.GTW.cr/",
    Name: "GTW"
  },
  {
    Img: ItalianImportRacing,
    Dir: "https://www.facebook.com/italianimportracing/",
    Name: "Italian Import Racing"
  }
]

export default function Sponsors() {
  return (
    <div id="sponsors" className="bg-white p-8">
      <div className={`flex justify-center ${Nebula.variable} font-Nebula`}>
        <h1 className="text-Indigo text-4xl">Sponsors</h1>
      </div>
      <div id="sponsors-container" className="pt-9">
        <div id="sponsors-scroll">
          <SponsorLink Img={SponsorsData[0].Img} Name={SponsorsData[0].Name} Dir={SponsorsData[0].Dir} />
          <SponsorLink Img={SponsorsData[1].Img} Name={SponsorsData[1].Name} Dir={SponsorsData[1].Dir} />
          <SponsorLink Img={SponsorsData[2].Img} Name={SponsorsData[2].Name} Dir={SponsorsData[2].Dir} />
          <SponsorLink Img={SponsorsData[3].Img} Name={SponsorsData[3].Name} Dir={SponsorsData[3].Dir} />
          <SponsorLink Img={SponsorsData[0].Img} Name={SponsorsData[0].Name} Dir={SponsorsData[0].Dir} />
          <SponsorLink Img={SponsorsData[1].Img} Name={SponsorsData[1].Name} Dir={SponsorsData[1].Dir} />
          <SponsorLink Img={SponsorsData[2].Img} Name={SponsorsData[2].Name} Dir={SponsorsData[2].Dir} />
          <SponsorLink Img={SponsorsData[3].Img} Name={SponsorsData[3].Name} Dir={SponsorsData[3].Dir} />
        </div>
      </div>
    </div>
  )
}

function SponsorLink({ Img, Dir, Name }) {
  return (
    <Link href={Dir} target="_blank" className="sponsor-item">
      <Image src={Img} alt={Name} height={150} width={200} />
    </Link>
  )
}
