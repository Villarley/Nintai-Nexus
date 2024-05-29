import React from "react";
import Image from "next/image";
import { Kleemax } from "@/components/Text"

export default function TeamMember({ Name, Role, Img }) {
      return (
      <div className="flex flex-row gap-10 items-center justify-center">
            <Image src={Img} alt={Name} width={450} height={450} />
            <div className="text-left">
                  <h1 className="text-6xl"><Kleemax className="text-3xl">{Name}</Kleemax></h1>
                  <h2 className="text-xl">{Role}</h2>
            </div>
      </div>
      );
      }