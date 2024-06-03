import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { IsoTypeFullColor } from "@/assets/Logos"
import NavLink from "./link"
import { AlignJustify, X } from "lucide-react"

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false)
  const navigationItems = [
    { name: "Team", link: "#team" },
    { name: "Sponsors", link: "#sponsors" },
    { name: "About us", link: "#about" },
  ]
  const handleSetMenu = () => setActiveMenu(!activeMenu)
  return (
    <>
      <div className="w-full flex items-center justify-between p-1">
        {/* Logo */}
        <Link href="#">
          <Image width={130} height={130} src={IsoTypeFullColor} alt="Logo" />
        </Link>
        {/* Logo */}
        {/*  Navigation items */}
        <div className="px-6 gap-14 hidden sm:flex">
          {navigationItems.map((item, idx) => (
            <NavLink key={idx} dir={item.link}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="flex sm:hidden p-6">
          <AlignJustify
            className={`${!activeMenu ? "flex" : "hidden"} cursor-pointer`}
            onClick={handleSetMenu}
            color="#fff"
          />
          <X
            className={`${activeMenu ? "flex" : "hidden"} cursor-pointer`}
            onClick={handleSetMenu}
            color="#fff"
          />
        </div>
      </div>
      <div className={`${activeMenu ? "flex" : "hidden"} flex-col justify-center`}>
        {navigationItems.map((item, idx) => (
          <NavLink key={idx} dir={item.link}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </>
  )
}
