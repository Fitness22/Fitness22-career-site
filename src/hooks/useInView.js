import { useEffect, useRef, useState } from 'react';

// Becomes true (once) when the element scrolls into view, and stays true.
// Usage: const [ref, inView] = useInView({ threshold: 0.6 });  <div ref={ref}>...</div>
// Options are IntersectionObserver options, e.g. rootMargin '0px 0px -30% 0px' means
// "when the element's top reaches 70% of the way down the screen".
export default function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
    // options is a literal object at the call site; observing once on mount is intended
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}
