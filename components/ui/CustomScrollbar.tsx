'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export default function CustomScrollbar() {
  const [shouldRender, setShouldRender] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  /* Cached geometry. Reading scrollHeight on every scroll event forces a
     synchronous layout, so it is only re-measured on resize. */
  const metricsRef = useRef({ windowHeight: 0, documentHeight: 0, trackHeight: 0, maxTop: 0 });

  useEffect(() => {
    const checkIsDesktop = () => {
      const isMobileWidth = window.innerWidth < 768;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setShouldRender(!isMobileWidth && !isTouchDevice);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop, { passive: true });
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  /* Writes geometry straight to the DOM node. No React state, so scrolling
     never triggers a re-render or style recalculation. */
  const paint = useCallback(() => {
    const thumb = thumbRef.current;
    if (!thumb) return;

    const { windowHeight, documentHeight, trackHeight } = metricsRef.current;
    if (documentHeight <= windowHeight || trackHeight === 0) {
      thumb.style.height = `${windowHeight * 0.5}px`;
      thumb.style.transform = 'translateY(0px)';
      return;
    }

    const thumbHeight = Math.max(30, (windowHeight / documentHeight) * trackHeight);
    const maxTop = trackHeight - thumbHeight;
    metricsRef.current.maxTop = maxTop;

    const scrollPercent = window.scrollY / (documentHeight - windowHeight);
    thumb.style.height = `${thumbHeight}px`;
    thumb.style.transform = `translateY(${Math.max(0, Math.min(1, scrollPercent)) * maxTop}px)`;
  }, []);

  const measure = useCallback(() => {
    metricsRef.current.windowHeight = window.innerHeight;
    metricsRef.current.documentHeight = document.documentElement.scrollHeight;
    metricsRef.current.trackHeight = window.innerHeight * 0.5;
    paint();
  }, [paint]);

  const scheduleHide = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.opacity = '1';
    track.style.pointerEvents = 'auto';
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      if (isDraggingRef.current) return;
      track.style.opacity = '0';
      track.style.pointerEvents = 'none';
    }, 500);
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafRef.current = requestAnimationFrame(() => {
        paint();
        scheduleHide();
        ticking = false;
      });
    };

    measure();
    scheduleHide();

    /* passive: true is essential — a blocking scroll listener stalls
       scrolling on every frame. */
    window.addEventListener('scroll', onScroll, { passive: true });
    const onResize = () => {
      measure();
      scheduleHide();
    };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [shouldRender, measure, scheduleHide, paint]);

  const handleThumbDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    scheduleHide();

    const startY = e.clientY;
    const thumb = thumbRef.current;
    const startTop = thumb ? new DOMMatrixReadOnly(getComputedStyle(thumb).transform).m42 : 0;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const { documentHeight, windowHeight, maxTop } = metricsRef.current;
      if (maxTop <= 0) return;
      const nextTop = Math.min(Math.max(0, startTop + (moveEvent.clientY - startY)), maxTop);
      if (thumb) thumb.style.transform = `translateY(${nextTop}px)`;
      window.scrollTo({
        top: (nextTop / maxTop) * (documentHeight - windowHeight),
        behavior: 'auto',
      });
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      scheduleHide();
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  /* The track advertises cursor:pointer, so make it actually jump. */
  const handleTrackClick = (e: React.MouseEvent) => {
    if (e.target !== trackRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    const { documentHeight, windowHeight, trackHeight, maxTop } = metricsRef.current;
    if (maxTop <= 0 || trackHeight === 0) return;
    const clickedY = e.clientY - track.getBoundingClientRect().top;
    const ratio = Math.min(Math.max(0, clickedY) / trackHeight, 1);
    window.scrollTo({ top: ratio * (documentHeight - windowHeight), behavior: 'smooth' });
  };

  if (!shouldRender) return null;

  return (
    <div
      ref={trackRef}
      onClick={handleTrackClick}
      style={{
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '16px',
        height: '50%',
        backgroundColor: '#f0f0f0',
        border: '2px solid black',
        zIndex: 9999,
        cursor: 'pointer',
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.15s ease-in-out',
      }}
    >
      <div
        ref={thumbRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          willChange: 'transform',
          backgroundColor: 'black',
          border: '1px solid white',
          cursor: 'grab',
        }}
        onMouseDown={handleThumbDrag}
      />
    </div>
  );
}