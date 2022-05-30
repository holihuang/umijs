import react, { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

export default function () {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  function move(e: any) {
    setPosition({ x: e.clientX, y: e.clientY });
  }
  useEffect(() => {
    document.addEventListener('mousemove', throttle(move, 100));
    return () => {
      document.removeEventListener('mousemove', throttle(move, 100));
    };
  }, []);
  return position;
}
