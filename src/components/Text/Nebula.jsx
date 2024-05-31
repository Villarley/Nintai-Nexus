import React from "react"
import nebula from "@next/font/local"
const Nebula = nebula({
  src: "../../assets/fonts/Nebula-Regular.otf",
  variable: "--font-nebula",
})

export default function Subtitle({ children, classname }) {
  return (
    <span className={`${Nebula.variable} ${classname} font-Nebula`}>{ children }</span>
  )
}