import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nebula } from "@/components/Text";
import { Isotype } from "@/assets/Logos"


export default function AboutUs() {
  return (
    <div className="w-full h-full bg-Bone flex flex-row justify-center items-center gap-12 py-20">
      <Image  src={Isotype} className=" w-96" alt=""/>
      <div className=" w-6/12 flex flex-col self-start mt-12">
            <Nebula> <h1 className="text-Indigo text-5xl">About Us</h1></Nebula>
            <p className="text-black text-justify text-md">NINTAI NEXUS is an F1 in Schools team with Japanese disruptive and futuristic style, reflecting innovation in every aspect of their creation. As a team we develop the most ingenious and creative ideas for our 3 different departements: Brand Management, Innovation Development and Car Engeineerings were we work together to create the NN24. Guided and representent by our japanese and salesians values, we bring the best work possible out to shine made with the effort of every team member joined to show the Ultimate Team.</p>
      </div>
    </div>
  );
}
