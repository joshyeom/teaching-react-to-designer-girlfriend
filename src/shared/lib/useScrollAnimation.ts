import { useEffect, useRef, useState } from 'react';

export type AnimationType = 
  | 'fadeIn'
  | 'slideUp'
  | 'slideDown' 
  | 'slideLeft'
  | 'slideRight'
  | 'zoomIn'
  | 'stagger';

export function useScrollAnimation(threshold: number = 0.1, animationType: AnimationType = 'fadeIn') {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animationType) {
        case 'slideUp':
          return 'opacity-0 transform translate-y-12';
        case 'slideDown':
          return 'opacity-0 transform -translate-y-12';
        case 'slideLeft':
          return 'opacity-0 transform translate-x-12';
        case 'slideRight':
          return 'opacity-0 transform -translate-x-12';
        case 'zoomIn':
          return 'opacity-0 transform scale-75';
        case 'stagger':
          return 'opacity-0 transform translate-y-8';
        default:
          return 'opacity-0 transform translate-y-10';
      }
    } else {
      return 'opacity-100 transform translate-y-0 translate-x-0 scale-100';
    }
  };

  return { ref, isVisible, animationClass: getAnimationClass() };
}

// 텍스트 애니메이션을 위한 별도 훅
export function useTextReveal(text: string, threshold: number = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const words = text.split(' ');

  return { ref, isVisible, words };
} 