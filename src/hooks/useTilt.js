import { useRef, useState } from 'react';

const MAX_TILT_DEG = 8;

// Makes an element tilt in 3D toward the mouse.
// Usage: const tilt = useTilt();  <div {...tilt}>...</div>
// The element needs a CSS `transition: transform` so it eases back flat when the mouse leaves.
export default function useTilt() {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  function onMouseMove(e) {
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width; // 0 → 1 across the element
    const y = (e.clientY - top) / height; // 0 → 1 down the element

    setStyle({
      transform: `perspective(1000px) rotateX(${(0.5 - y) * 2 * MAX_TILT_DEG}deg) rotateY(${(x - 0.5) * 2 * MAX_TILT_DEG}deg) scale(1.04)`,
      transition: 'transform 0.1s ease-out',
    });
  }

  function onMouseLeave() {
    setStyle({}); // falls back to the CSS transition, easing the element back flat
  }

  return { ref, style, onMouseMove, onMouseLeave };
}
