// Create a hook usePrevious() to return the previous value, with initial value of `undefined.

import {useEffect, useRef} from 'react';

export function usePrevious<T>(value: T): T | undefined {
  // your code here
const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }


