import React from "react"
import { IBM_Plex_Sans } from "next/font/google"
const IBM_Plex = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-ibm"
  })

export default function Subtitle({ children, classname }) {
  return (
    <span className={`${IBM_Plex.variable} ${classname} font-Ibm`}>{ children }</span>
  )
}