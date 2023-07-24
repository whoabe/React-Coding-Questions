// It is quite common to see switches and checkboxes in web apps.

// Implement useToggle() to make things easier

// function App() {
//   const [on, toggle] = useToggle()
//   ...
// }

import { useState, useCallback} from 'react';

export const useToggle = (on: boolean): [boolean, () => void] => {
  
  const [toggleState, setToggleState] = useState(on);

  const toggle = useCallback(() => setToggleState(prev => !prev), []);

  
  return [toggleState, toggle];
}