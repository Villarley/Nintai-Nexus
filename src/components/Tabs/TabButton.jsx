import React from "react"
import { IBM_Plex_Sans } from "next/font/google"
const IBM_Plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ibm"
})

export default function TabButton({ children, isActive, onClick }) {
  return (
          <button
            className={`${IBM_Plex.variable} font-Ibm text-lg px-3 md:text-2xl md:px-10 ${
              isActive ? " text-black border-b-2 border-b-Indigo" : " text-gray-400"
            }`}
            onClick={onClick}
          >
            {children}
          </button>
  )
}
