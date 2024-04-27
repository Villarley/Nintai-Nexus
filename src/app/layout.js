import { IBM_Plex_Sans } from "next/font/google"

import "./globals.css"

const IBM = IBM_Plex_Sans({ subsets: ["latin"], weight:["600"] })

export const metadata = {
  title: "Nintai Nexus",
  description: "Nintai Nexus website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={IBM.className}>{children}</body>
    </html>
  )
}
