import React from 'react'
import Image from 'next/image'
import { Kleemax } from "@/components/Text"

export default function CardValues({ Img, Name }) {
  return (
    <div className=" w-72 flex flex-col rounded-2xl items-center bg-white py-16 px-6 gap-4">
        <Image height={200} src={Img} alt=""/>
        <h2><Kleemax classname="text-xl text-black">{Name}</Kleemax></h2>
    </div>
  )
}
