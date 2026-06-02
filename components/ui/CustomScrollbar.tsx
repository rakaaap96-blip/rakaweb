'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

export default function CustomScrollbar() {
  const [shouldRender, setShouldRender] = useState(false);
  const [thumbHeight, setThumbHeight] = useState(50);
  const [thumbTop, setThumbTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const rafId = useRef<number | null>(null);
  const ticking = useRef(false);

  // Deteksi apakah device adalah desktop (non-mobile, non-touch)
  useEffect(() => {
    const checkIsDesktop = () => {
      // Tidak render di mobile (lebar < 768px) atau device touch
      const isMobileWidth = window.innerWidth < 768;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setShouldRender(!isMobileWidth && !isTouchDevice);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const showScrollbar = useCallback(() => {
    setIsVisible(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      if (!isDragging.current) setIsVisible(false);
    }, 500);
  }, []);

  const updateThumb = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      if (documentHeight <= windowHeight) {
        setThumbHeight(windowHeight * 0.5);
        setThumbTop(0);
        return;
      }

      const trackHeight = windowHeight * 0.5;
      const thumbPercent = windowHeight / documentHeight;
      let newThumbHeight = thumbPercent * trackHeight;
      newThumbHeight = Math.max(30, newThumbHeight);
      setThumbHeight(newThumbHeight);

      const maxThumbTop = trackHeight - newThumbHeight;
      const scrollPercent = scrollTop / (documentHeight - windowHeight);
      setThumbTop(scrollPercent * maxThumbTop);
    });
  }, []);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const delta = e.deltaY || e.deltaX;
        window.scrollBy({ top: delta, behavior: 'auto' });
        showScrollbar();
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [showScrollbar]);

  const handleThumbDrag = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    showScrollbar();
    const startY = e.clientY;
    const startTop = thumbTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const trackHeight = windowHeight * 0.5;
    const maxThumbTop = trackHeight - thumbHeight;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isDragging.current) return;
      requestAnimationFrame(() => {
        let newTop = startTop + (moveEvent.clientY - startY);
        newTop = Math.min(Math.max(0, newTop), maxThumbTop);
        setThumbTop(newTop);
        const scrollPercent = newTop / maxThumbTop;
        window.scrollTo({
          top: scrollPercent * (documentHeight - windowHeight),
          behavior: 'auto',
        });
        showScrollbar();
      });
    };

    const onMouseUp = () => {
      isDragging.current = false;
      hideTimeoutRef.current = setTimeout(() => setIsVisible(false), 500);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }, [thumbTop, thumbHeight, showScrollbar]);

  useEffect(() => {
    if (!shouldRender) return;

    updateThumb();
    const onWindowScroll = () => {
      updateThumb();
      showScrollbar();
    };
    window.addEventListener('scroll', onWindowScroll);
    window.addEventListener('resize', updateThumb);

    const track = trackRef.current;
    if (track) track.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('resize', updateThumb);
      if (track) track.removeEventListener('wheel', handleWheel);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [shouldRender, updateThumb, showScrollbar, handleWheel]);

  // Tidak render di mobile atau touch device
  if (!shouldRender) return null;

  return (
    <div
      ref={trackRef}
      style={{
        position: 'fixed',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '16px',
        height: '50%',
        backgroundColor: '#f0f0f0',
        border: '2px solid black',
        zIndex: 9999,
        cursor: 'pointer',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.15s ease-in-out',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <div
        ref={thumbRef}
        style={{
          position: 'absolute',
          top: thumbTop,
          left: 0,
          width: '100%',
          height: thumbHeight,
          backgroundColor: 'black',
          border: '1px solid white',
          cursor: 'grab',
        }}
        onMouseDown={handleThumbDrag}
      />
    </div>
  );
}