// Create a hook to tell if it is the first render.

// function App() {
//   const isFirstRender = useIsFirstRender()
//   // only true for the first render
//   ...
// }

import {useRef} from 'react';

export function useIsFirstRender(): boolean {
  // your code here
  const isFirstRender = useRef(true);
  if (isFirstRender.current === true) {
    isFirstRender.current = false;
    return true;
  } 
  return false;
}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }


