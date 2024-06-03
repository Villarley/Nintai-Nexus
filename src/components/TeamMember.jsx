import React from "react";
import Image from "next/image";
import { Kleemax } from "@/components/Text"
import { IBM_Plex_Sans } from "next/font/google"
const IBM_Plex = IBM_Plex_Sans({
      subsets: ["latin"],
      weight: "400",
      variable: "--font-ibm"
    })

export default function TeamMember({ Name, Surname, Role, Img }) {
      return (
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center py-40">
            <Image src={Img} alt={Name} className="h-72 w-56"/>
            <div className="">
                  <Kleemax><h1 className="text-4xl md:text-6xl text-Indigo">{Name}</h1><h1 className="text-3xl md:text-6xl">{Surname}</h1></Kleemax>
                  <h3 className="font-Ibm text-lg md:text-2xl">{Role}</h3>
            </div>
      </div>
      )
      }