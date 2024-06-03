import React from "react"
import { Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Autoplay } from "swiper/modules"

import TeamMember from "@/components/TeamMember"
import { LoboPlano, ArleyPlano, AmandaPlano, MariaPlano, JoelPlano, LuisPlano } from "@/assets/TeamMembers"

export default function TeamCarousel() {
    const members = [
        {Name:"SANTIAGO", Surname:"LOBO", Img:LoboPlano, Role:"Project Manager"},
        {Name:"SANTIAGO", Surname:"VILLARREAL", Img:ArleyPlano, Role:"Finance Manager"},
        {Name:"AMANDA", Surname:"CORDERO", Img:AmandaPlano, Role:"Manufacturing Engineer"},
        {Name:"MARIA", Surname:"CURCO", Img:MariaPlano, Role:"Design Engineer"},
        {Name:"JOEL", Surname:"VARGAS", Img:JoelPlano, Role:"Graphic Designer"},
        {Name:"LUIS", Surname:"ANGEL", Img:LuisPlano, Role:"Sponsorship Manager"}
    ]
  return (
    <Swiper id="team" rewind={true}  modules={[Autoplay]} autoHeight={false} autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }} className=" h-full bg-black flex justify-center items-center">
        {members?.map((member, index) => (
            <SwiperSlide key={index} className="bg-black">
                <TeamMember Img={member.Img} Name={member.Name} Surname={member.Surname} Role={member.Role} Height={member.Height} Width={member.Width}/>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}