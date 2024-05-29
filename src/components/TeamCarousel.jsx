import React from "react"
import { Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Autoplay } from "swiper/modules"

import TeamMember from "@/components/TeamMember"
import { LoboPlano, ArleyPlano, AmandaPlano, MariaPlano, JoelPlano, LuisPlano } from "@/assets/TeamMembers"

export default function TeamCarousel() {
    const members = [
        {Name:"SANTIAGO", Surname:"LOBO", Img:LoboPlano, Role:"Project Manager", Height:415, Width:415},
        {Name:"SANTIAGO", Surname:"VILLARREAL", Img:ArleyPlano, Role:"Finance Manager", Height:366, Width:366},
        {Name:"AMANDA", Surname:"CORDERO", Img:AmandaPlano, Role:"Manufacturing Engineer", Height:367, Width:367},
        {Name:"MARIA", Surname:"CURCO", Img:MariaPlano, Role:"Design Engineer", Height:320, Width:320},
        {Name:"JOEL", Surname:"VARGAS", Img:JoelPlano, Role:"Graphic Designer", Height:280, Width:280},
        {Name:"LUIS", Surname:"ANGEL", Img:LuisPlano, Role:"Sponsorship Manager", Height:352, Width:352}
    ]
  return (
    <Swiper rewind={true}  modules={[Autoplay]} autoHeight={false} autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }} className=" h-full bg-black flex justify-center items-center">
        {members.map((member, index) => (
            <SwiperSlide key={index} className="bg-black">
                <TeamMember Img={member.Img} Name={member.Name} Surname={member.Surname} Role={member.Role} Height={member.Height} Width={member.Width}/>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}