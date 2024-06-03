import React from 'react'
import Link from 'next/link'
import nebula from '@next/font/local'
import { IBM_Plex_Sans } from 'next/font/google'

const Nebula = nebula({
  src: '../../assets/fonts/Nebula-Regular.otf', 
  variable: '--font-nebula'
})
const IBM_Plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ibm'
})
export default function NavLink({ children, dir }) {
  return (
    <Link href={dir}  className={`${Nebula.variable} font-Nebula text-lg text-center transition-all hover:text-Indigo`}>{children}</Link>
  )
}
