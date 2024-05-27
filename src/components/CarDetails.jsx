import React, { useState } from "react"
import nebula from "@next/font/local"
import { TabButton, TabContent } from "@/components/Tabs"

const Nebula = nebula({
  src: "../assets/fonts/Nebula-Regular.otf",
  variable: "--font-nebula",
})

export default function CarDetails() {
  return (
    <div className="bg-Bone flex flex-col gap-10 py-14">
      <h1 className={`${Nebula.variable} font-Nebula text-center text-5xl text-Indigo`}>Car</h1>
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
      <TabContent isActive={isActive === 0}>Engine</TabContent>
      <TabContent isActive={isActive === 1}>Aerodynamics</TabContent>
      <TabContent isActive={isActive === 2}>Chassis</TabContent>
      <TabContent isActive={isActive === 3}>Design</TabContent>
    </div>
  )
}
