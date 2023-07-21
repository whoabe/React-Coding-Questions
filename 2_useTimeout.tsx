// Create a hook to easily use setTimeout(callback, delay).

// reset the timer if delay changes
// DO NOT reset the timer if only callback changes

import { useRef, useEffect } from "react";

export function useTimeout(callback: () => void, delay: number) {

  // your code here
    const callbackRef = useRef(callback)
    // store callback in callbackRef.current which ensures that the callback reference persists across renders without casuing unwanted side effects
    callbackRef.current = callback;

    useEffect(()=> {
      // run the callback function after the delay time has passed
      const id = setTimeout(()=>callbackRef.current(),delay);
      // cleanup function clears the timeout preventing the callback from being executed if the component is unmounted or if the delay value changes before the timeout is reached
      return () => clearTimeout(id)
    }, [delay])
}

// if you want to try your code on the right panel
// remember to export App() component like below

export function App() {
  return (<div></div>)
}
