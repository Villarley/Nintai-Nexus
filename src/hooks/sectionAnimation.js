import { useEffect } from 'react'
import anime from 'animejs'

const useSectionAnimation = (sectionRefs) => {
  useEffect(() => {
    anime({
      targets: sectionRefs.current,
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 800,
      easing: 'easeOutQuad',
      delay: anime.stagger(200)
    })
  }, [sectionRefs])
}

export default useSectionAnimation
