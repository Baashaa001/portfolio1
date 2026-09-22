import { useState, useEffect, useRef } from 'react';

export function useInView(options = { threshold: 0.15, triggerOnce: true }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce) {
          observer.unobserve(target);
        }
      } else if (!options.triggerOnce) {
        setIsInView(false);
      }
    }, options);

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [options.threshold, options.triggerOnce]);

  return [ref, isInView];
}
