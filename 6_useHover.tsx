// It is common to see conditional rendering based on hover state of some element.

// We can achive it by CSS pseduo class :hover, but for more complex cases it might be better to have state controlled by script.

// Now you are asked to create a useHover() hook.

// function App() {
//   const [ref, isHovered] = useHover()
//   return <div ref={ref}>{isHovered ? 'hovered' : 'not hovered'}</div>
// }

import { Ref, useRef, useState, useCallback } from 'react'

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const ref = useRef<T>();
  const callbackRef = useCallback(node => {
    if (ref.current) {
      ref.current.removeEventListener('mouseenter', handleMouseEnter);
      ref.current.removeEventListener('mouseleave', handleMouseLeave);
    }

    ref.current = node;

    if (ref.current) {
      ref.current.addEventListener('mouseenter', handleMouseEnter);
      ref.current.addEventListener('mouseleave', handleMouseLeave);
    }
  }, [handleMouseEnter, handleMouseLeave]);

  // your code here
  return [callbackRef, isHovered];
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import { Ref, useRef, useState, useEffect } from 'react'

export function useHover<T extends HTMLElement>(): [Ref<T | undefined>, boolean] {
  const ref = useRef<T>()
  const [isHovering, setHovering] = useState(false)
  useEffect(() => {
    // false by default if ref.current changes
    setHovering(false)

    const element = ref.current
    if (!element)
      return

    const setYes = () => setHovering(true)
    const setNo = () => setHovering(false)
  
    element.addEventListener('mouseenter', setYes)
    element.addEventListener('mouseleave', setNo)

    return () => {
      element.removeEventListener('mouseenter', setYes)
      element.removeEventListener('mouseleave', setNo)
    }
  }, [ref.current])
  return [ref, isHovering]
}