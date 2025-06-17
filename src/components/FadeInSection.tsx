'use client';

import { useState, useEffect, useRef } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number; // Optional delay for staggered animations
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Optionally unobserve after it's visible if it doesn't need to fade out
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the item is visible
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection; 