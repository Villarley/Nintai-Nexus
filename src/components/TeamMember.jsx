import React from "react";
import Image from "next/image";
import { Kleemax } from "@/components/Text"

export default function TeamMember({ Name, Surname, Role, Img, Height, Width }) {
      return (
      <div className="flex flex-row gap-8 items-center justify-center">
            <Image src={Img} alt={Name} width={Width} height={Height} />
            <div className="">
                  <Kleemax><h1 className="text-6xl text-Indigo">{Name}</h1><h1 className="text-6xl">{Surname}</h1></Kleemax>
                  <h3 className="text-2xl">{Role}</h3>
            </div>
      </div>
      );
      }