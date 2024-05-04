import { IBM_Plex_Sans, Inter } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"

const IBM = IBM_Plex_Sans({ subsets: ["latin"], weight:["600"] })
const kleemax = localFont({
  src: [
    {
      path: '../assets/fonts/Kleemax.ttf',
      weight: '600'
    }
  ],
})

export const metadata = {
  title: "Nintai Nexus",
  description: "Nintai Nexus website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kleemax.variable}`}>{children}</body>
    </html>
  )
}
