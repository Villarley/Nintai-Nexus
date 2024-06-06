import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import anime from "animejs"
import { ImagoTypeBlack } from "@/assets/Logos"
import { usePathname } from "next/navigation"


const LogoAnimation = ({ onAnimationEnd }) => {
  const logoRef = useRef(null)
  const [visibleButton, setVisibleButton] = useState(true)
  const pathname = usePathname()
  const soundPath = pathname === "/" ? "/sounds/logoSound.wav" : "/sounds/extendedSound.wav"
  const startAnimation = async () => {
    try {
      const audio = new Audio(soundPath)
      await audio.play()
      console.log("Audio is playing")

      anime.timeline({
        complete: () => {
          setTimeout(onAnimationEnd, 500) // Espera 0.5 segundos antes de llamar a onAnimationEnd
        }
      })
      .add({
        targets: logoRef.current,
        opacity: [0, 1],
        scale: [0.5, 1.2],
        duration: 800,
        easing: "easeInOutExpo"
      })
      .add({
        targets: logoRef.current,
        scale: [1.2, 1],
        duration: 300,
        easing: "easeOutExpo"
      })
      .add({
        targets: logoRef.current,
        opacity: [1, 0],
        duration: 500,
        easing: "easeInOutExpo"
      })
    } catch (error) {
      console.error("Error playing audio:", error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <div ref={logoRef} className="bg-black">
        <Image src={ImagoTypeBlack} alt="Logo" />
      </div>
      <button onClick={()=>{
        setVisibleButton(false)
        startAnimation()
      }} className={`rounded-xl mt-4 p-2 bg-white text-black ${visibleButton ? "flex":"hidden"}`}>
        Are you ready?
      </button>
    </div>
  )
}

export default LogoAnimation
