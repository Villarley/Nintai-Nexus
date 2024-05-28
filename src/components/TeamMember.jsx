import React from "react";
import Image from "next/image";
import { Kleemax } from "@/components/Text"

export default function TeamMember({ name, role, image }) {
      return (
      <div className="flex flex-col items-center">
            <Image src={image} alt={name} width={150} height={150} className="rounded-full" />
            <div className="text-center">
            <h3 className="font-bold text-lg">{name}</h3>
            <Kleemax className="text-sm">{role}</Kleemax>
            </div>
      </div>
      );
      }