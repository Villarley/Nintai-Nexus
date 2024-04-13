import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IsoTypeFullColor } from "@/assets/Logos"

export default function Navbar() {
    const navigationItems = [
        {name: 'Home', link: '/'},
        {name: 'About', link: '/about'},
        {name: 'Contact', link: '/contact'}
    ]
  return (
    <div className="w-full flex justify-between p-1">
        {/* Logo */}
        <div className="">
          <Link href="#">
            <Image width={130} height={130} src={IsoTypeFullColor} alt="Logo" />
          </Link>
        </div>
        {/*  Navigation items */}
        <div className=" bg-red-600 w-10 h-10"></div>
    </div>
  )
}
