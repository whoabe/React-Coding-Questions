


// This is a React coding question from BFE.dev

import React, {useRef, useState, useEffect} from 'react'

export function useClickOutside<T extends HTMLElement>(callback: () => void):React.RefObject<T> {
  // your code here
  const ref = useRef<T>(null);
  // if you click outside the ref target then alert
  useEffect(() => {
    // click events
    // add click event on the document level
    const click = ({target}:Event) => {
      // check click's target and if ref.current and if the target element is not contained within the ref.current
      if(target && ref.current && !ref.current.contains(target as Node)){
        callback();
      }
    };
    document.addEventListener("click", click);
    // cleanup event
    return() => {
      document.removeEventListener("click", click)
    }
  },[]);

  return ref;
}

// to try your code on the right panel
// export App() component like below

export function App() {
  const [open, setOpen] = useState(false)
  const outsideClickRef:React.RefObject<HTMLElement> = useClickOutside(() => {
    setOpen(false)
  });
  const styles = {
    width: '120px',
    height: '200px',
    border : '2px dashed red'
  };
  const listStyles = {
    display: open ? 'block' : 'none'
  }
  return <div style={styles}>
      <section ref={outsideClickRef}>
        <h3 onClick={() => setOpen(true)}>Click to see menu</h3>
        <ul style={listStyles}>
          <li>menu1</li>
          <li>menu2</li>
          <li>menu3</li>
          <p onClick={() => setOpen(false)}>Close X</p>
        </ul>
      </section>
  </div>
}


