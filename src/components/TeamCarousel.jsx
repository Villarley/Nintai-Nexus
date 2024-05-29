import React from "react"
import { Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from "swiper/modules"

import TeamMember from "@/components/TeamMember"
import { LoboPlano, ArleyPlano, AmandaPlano, MariaPlano, JoelPlano, LuisPlano } from "@/assets/TeamMembers"

export default function TeamCarousel() {
    const members = [
        {Name:"SANTIAGO LOBO", Img:LoboPlano, Role:"Project Manager"},
        {Name:"SANTIAGO VILLARREAL", Img:ArleyPlano, Role:"Finance Manager"},
        {Name:"AMANDA CORDERO", Img:AmandaPlano, Role:"Manufacturing Engineer"},
        {Name:"MARIA CURCO", Img:MariaPlano, Role:"Design Engineer"},
        {Name:"JOEL VARGAS", Img:JoelPlano, Role:"Graphic Designer"},
        {Name:"LUIS ANGEL", Img:LuisPlano, Role:"Sponsorship Manager"}
    ]
  return (
    <Swiper rewind={true} navigation={true} modules={[Navigation]} className="bg-black flex justify-center items-center self-center">
        {members.map((member, index) => (
            <SwiperSlide key={index} className="bg-black">
                <TeamMember Img={member.Img} Name={member.Name} Role={member.Role}/>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}