import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'framer-motion';

interface CounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

export function Counter({ value, suffix = "", decimals = 0 }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !inView) return;

    const controls = animate(0, value, {
      duration: 2.5,
      onUpdate(v) {
        node.textContent = v.toFixed(v % 1 !== 0 ? decimals : 0) + suffix;
      },
      ease: "easeOut"
    });

    return () => controls.stop();
  }, [value, suffix, decimals, inView]);

  return <span ref={nodeRef}>0{suffix}</span>;
}
