import React, { useEffect, useRef } from 'react'
import anime from 'animejs'

const EngineTextAnimation = ({ children }) => {
  const textRef = useRef(null)

  useEffect(() => {
    const targets = textRef.current.children

    anime({
      targets: targets,
      translateY: [50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      delay: anime.stagger(100) // Delay starts from 100ms for each element
    })
  }, [])

  return (
    <div ref={textRef} className="text-center">
      {React.Children.map(children, (child, index) => (
        <span key={index} style={{ opacity: 0, display: 'inline-block' }}>
          {child}
        </span>
      ))}
    </div>
  )
}

export default EngineTextAnimation
