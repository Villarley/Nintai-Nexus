import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ImagoTypeIndigo, IsotypeIndigo } from "@/assets/Logos"
import { Nebula, Ibm } from "@/components/Text"
import { Insta, Facebook } from "@/assets/Icons/"

export default function Footer() {
  return (
    <div className="flex items-center justify-between bg-Indigo py-6 px-2 sm:p-10">
        <Image src={ImagoTypeIndigo} className="hidden md:flex md:h-[500px]" alt=""/>
        <Image src={IsotypeIndigo} className="flex md:hidden h-16" alt=""/>
        <div className="flex flex-col">
            <Nebula classname="text-lg sm:text-2xl text-center">Social Media</Nebula>
            <div className="flex justify-center gap-6">
                <Link target="_blank"  className=" hover:scale-125 transition-all" href="https://www.instagram.com/nintainexus">
                    <Image className="h-5 w-5 md:h-14 md:w-10" src={Insta} alt=""/>
                </Link>
                <Link target="_blank"  className=" hover:scale-125 transition-all" href="https://www.facebook.com/cedespaginaoficial">
                    <Image className="h-5 w-5 md:h-14 md:w-10" src={Facebook} alt=""/>
                </Link>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <Nebula classname="text-lg sm:text-2xl">Team</Nebula>
            <div className="flex flex-col">
                <Ibm classname="text-sm md:text-lg">Portfolio</Ibm>
                <Ibm classname="text-sm md:text-lg">Contact</Ibm>
            </div>
        </div>
    </div>
  )
}
