import React from "react"
import Card from "@/components/CardValues"
import { Nebula } from "@/components/Text"
import { Audacity, Authenticity, Connection, Excellence, Perseverance, Resilence } from "@/assets/Values"

export default function Values() {
    const values = [
        {Name:"Audacity", Img:Audacity},
        {Name:"Authenticity", Img:Authenticity},
        {Name:"Connection", Img:Connection},
        {Name:"Excellence", Img:Excellence},
        {Name:"Perseverance", Img:Perseverance},
        {Name:"Resilence", Img:Resilence}
    ]
  return (
    <div className="bg-Bone flex flex-col py-20 gap-6">
      <Nebula classname="text-center text-2xl text-Indigo">Our values</Nebula>
      <div className="flex justify-center flex-wrap gap-20">
        {values.map((value, index) => (
           <Card key={index} Img={value.Img} Name={value.Name}/>
        ))}
      </div>
    </div>
  )
}
