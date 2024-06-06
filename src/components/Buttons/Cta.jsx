import React from 'react'
import { Ibm } from "@/components/Text"
import { useRouter } from 'next/navigation'
 
 

export default function Cta({ children, }) {
    const router = useRouter()
  
    return (
    <button onClick={()=>router.push("/Car")} className="text-2xl text-center p-2 rounded-xl bg-gradient-to-r from-[#a093f6] to-[#7a01f4] hover:from-Bone hover:to-Bone hover:text-Indigo transition duration-300 ease-in-out">
      <Ibm> {children} </Ibm>
    </button>
  )
}
