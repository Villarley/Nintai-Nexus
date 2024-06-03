import React from "react"
import kleemax from "@next/font/local"
const Kleemax = kleemax({
    src: "../../assets/fonts/Kleemax.ttf",
    variable: "--font-kleemax"
  })

export default function Subtitle({ children, classname }) {
  return (
    <span className={`${Kleemax.variable} ${classname} font-Kleemax`}>{ children }</span>
  )
}
