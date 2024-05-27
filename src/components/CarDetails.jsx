import React, { useState } from "react"
import Image from "next/image"
import nebula from "@next/font/local"
import { NN24, SideNN24 } from "@/assets/Car"
import { TabButton, TabContent } from "@/components/Tabs"
import { Nebula } from "@/components/Text"


export default function CarDetails() {
  return (
    <div className="bg-Bone flex flex-col gap-10 py-14">
      <h1 className="text-center"><Nebula classname="text-center text-5xl text-Indigo">Car</Nebula></h1>
      <Tab />
    </div>
  )
}

function Tab() {
  const [isActive, setIsActive] = useState(0)

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="w-full overflow-x-auto">
        <div className="flex mx-auto gap-2 w-max">
          <TabButton isActive={isActive === 0} onClick={() => setIsActive(0)}>
            Engine
          </TabButton>
          <TabButton isActive={isActive === 1} onClick={() => setIsActive(1)}>
            Aerodynamics
          </TabButton>
          <TabButton isActive={isActive === 2} onClick={() => setIsActive(2)}>
            Chassis
          </TabButton>
          <TabButton isActive={isActive === 3} onClick={() => setIsActive(3)}>
            Design
          </TabButton>
        </div>
      </div>
      <TabContent isActive={isActive === 0}>
        <Image src={NN24} alt=""/>
        <div className="flex">
          <div className="flex flex-col p-5">
            <Nebula classname="text-center text-2xl text-black">Weight</Nebula>
            <Nebula classname="text-center text-2xl text-Indigo">60 g</Nebula>
          </div>
        </div>
        </TabContent>
      <TabContent isActive={isActive === 1}><Image src={SideNN24} alt=""/></TabContent>
      <TabContent isActive={isActive === 2}>Chassis</TabContent>
      <TabContent isActive={isActive === 3}>Design</TabContent>
    </div>
  )
}
