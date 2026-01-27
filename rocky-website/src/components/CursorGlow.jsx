import { useEffect, useRef } from 'react';
import './CursorGlow.css';

const CursorGlow = () => {
  const glowRef = useRef(null);
  const trailRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const trailPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      position.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (glowRef.current && trailRef.current) {
        // Main glow follows cursor instantly
        glowRef.current.style.left = `${position.current.x}px`;
        glowRef.current.style.top = `${position.current.y}px`;

        // Trail follows with smooth lerp
        trailPosition.current.x += (position.current.x - trailPosition.current.x) * 0.15;
        trailPosition.current.y += (position.current.y - trailPosition.current.y) * 0.15;

        trailRef.current.style.left = `${trailPosition.current.x}px`;
        trailRef.current.style.top = `${trailPosition.current.y}px`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={trailRef} className="cursor-trail"></div>
      <div ref={glowRef} className="cursor-glow"></div>
    </>
  );
};

export default CursorGlow;
