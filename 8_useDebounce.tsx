// For a frequently changing value like text input you might want to debounce the changes.

// Implement useDebounce() to achieve this.

// function App() {
//   const [value, setValue] = useState(...)
//   // this value changes frequently, 
//   const debouncedValue = useDebounce(value, 1000)
//   // now it is debounced
// }
// The logic should be similar to 6. implement basic debounce()

import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value)
    }, delay);

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debounced
}