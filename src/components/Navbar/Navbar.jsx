import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IsoTypeFullColor } from "@/assets/Logos"
import NavLink from './link'
import { AlignJustify } from "lucide-react"

export default function Navbar() {
  const [ activeMenu, setActiveMenu ] = useState()
    const navigationItems = [
        {name: 'Team', link: '/'},
        {name: 'Sponsors', link: '#sponsors'},
        {name: 'About us', link: '#contact'}
    ]
  return (
    <div className="w-full flex items-center justify-between p-1">
        {/* Logo */}
          <Link href="#">
            <Image width={130} height={130} src={IsoTypeFullColor} alt="Logo" />
          </Link>
        {/* Logo */}
        {/*  Navigation items */}
        <div className="px-6 gap-14 hidden md:flex">
            {
              navigationItems.map((item, idx) => (
                <NavLink key={idx} dir={item.link}>{ item.name }</NavLink>
              ))
            }
        </div>
        <div className="flex flex-col sm:hidden">
        <AlignJustify className={`${activeMenu ? 'flex' : 'hidden'}`} />
        {
              navigationItems.map((item, idx) => (
                <NavLink key={idx} dir={item.link}>{ item.name }</NavLink>
              ))
            }
        </div>
    </div>
  )
}
