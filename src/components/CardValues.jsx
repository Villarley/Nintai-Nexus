import React from 'react'
import Image from 'next/image'
import { Kleemax, Nebula } from "@/components/Text"

export default function CardValues({ Img, Name }) {
  return (
    <div className=" w-72 flex flex-col rounded-2xl items-center bg-white py-16 px-6 gap-4">
        <Image height={200} src={Img} alt=""/>
        <h2><Nebula classname="text-2xl font-bold text-Indigo">{Name}</Nebula></h2>
    </div>
  )
}
