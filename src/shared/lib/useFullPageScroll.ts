import { useEffect, useState, useCallback, useRef } from 'react';

interface UseFullPageScrollProps {
  sections: number;
  animationDuration?: number;
}

export function useFullPageScroll({ sections, animationDuration = 1000 }: UseFullPageScrollProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0.2);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // 스크롤 누적값을 추적
  const scrollAccumulator = useRef(0);
  const lastEventTime = useRef(0);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    if (isAnimating) return;
    
    const now = Date.now();
    
    // 이벤트가 너무 빠르게 연속으로 오면 무시 (디바운싱)
    if (now - lastEventTime.current < 16) return; // 60fps 제한
    lastEventTime.current = now;
    
    // 정규화된 스크롤 값 (플랫폼 독립적)
    const normalizedDelta = Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), 100);
    
    if (normalizedDelta > 0) {
      // 아래로 스크롤
      scrollAccumulator.current += 20; // 고정된 증가량
      const newProgress = Math.min(scrollAccumulator.current / 200, 1); // 200픽셀 누적시 완료
      
      setScrollProgress(newProgress);
      
      if (newProgress >= 1 && currentSection < sections - 1) {
        setIsAnimating(true);
        setCurrentSection(prev => prev + 1);
        scrollAccumulator.current = 0; // 리셋
        setScrollProgress(0.1);
        setTimeout(() => setIsAnimating(false), 400);
      }
    } else {
      // 위로 스크롤
      if (scrollAccumulator.current > 0) {
        scrollAccumulator.current -= 20;
        const newProgress = Math.max(scrollAccumulator.current / 200, 0);
        setScrollProgress(newProgress);
      } else if (currentSection > 0) {
        setIsAnimating(true);
        setCurrentSection(prev => prev - 1);
        scrollAccumulator.current = 180; // 거의 완료된 상태로 설정
        setScrollProgress(0.9);
        setTimeout(() => setIsAnimating(false), 400);
      }
    }
  }, [currentSection, sections, isAnimating]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isAnimating) return;

    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      scrollAccumulator.current += 50;
      const newProgress = Math.min(scrollAccumulator.current / 200, 1);
      setScrollProgress(newProgress);
      
      if (newProgress >= 1 && currentSection < sections - 1) {
        setIsAnimating(true);
        setCurrentSection(prev => prev + 1);
        scrollAccumulator.current = 0;
        setScrollProgress(0.1);
        setTimeout(() => setIsAnimating(false), 400);
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      if (scrollAccumulator.current > 0) {
        scrollAccumulator.current -= 50;
        const newProgress = Math.max(scrollAccumulator.current / 200, 0);
        setScrollProgress(newProgress);
      } else if (currentSection > 0) {
        setIsAnimating(true);
        setCurrentSection(prev => prev - 1);
        scrollAccumulator.current = 180;
        setScrollProgress(0.9);
        setTimeout(() => setIsAnimating(false), 400);
      }
    }
  }, [currentSection, sections, isAnimating]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, handleKeyDown]);

  // 각 요소의 애니메이션 진행률 계산
  const getElementProgress = (elementIndex: number, totalElements: number) => {
    const elementThreshold = elementIndex / totalElements;
    const elementRange = 1 / totalElements;
    
    if (scrollProgress < elementThreshold) return 0;
    if (scrollProgress > elementThreshold + elementRange) return 1;
    
    return (scrollProgress - elementThreshold) / elementRange;
  };

  return {
    currentSection,
    scrollProgress,
    isAnimating,
    getElementProgress,
    setCurrentSection: (section: number) => {
      setCurrentSection(section);
      scrollAccumulator.current = 0;
      setScrollProgress(0.1);
    }
  };
} 