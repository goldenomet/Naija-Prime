import React, { useEffect, useState } from 'react';
import { Landmark } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Primary smooth cursor spring (responsive, silky, zero jitter)
  const mainX = useSpring(mouseX, { damping: 32, stiffness: 500, mass: 0.12 });
  const mainY = useSpring(mouseY, { damping: 32, stiffness: 500, mass: 0.12 });

  // Trailing ambient ring spring (smooth, liquid follow)
  const ringX = useSpring(mouseX, { damping: 24, stiffness: 220, mass: 0.25 });
  const ringY = useSpring(mouseY, { damping: 24, stiffness: 220, mass: 0.25 });

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, select, textarea, [role="button"], .cursor-pointer, [onclick]');
        setIsPointer(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Subtle Trailing Pulse Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none flex items-center justify-center will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full border border-red-500/40 pointer-events-none"
          animate={{
            width: isPointer ? 46 : 34,
            height: isPointer ? 46 : 34,
            scale: isClicked ? 0.8 : 1,
            opacity: isPointer ? 0.75 : 0.35,
            borderColor: isPointer ? 'rgba(239, 68, 68, 0.6)' : 'rgba(239, 68, 68, 0.35)',
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 300,
            mass: 0.2
          }}
        />
      </motion.div>

      {/* Main Logo Cursor (Smooth, Centered Landmark Icon) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] flex items-center justify-center will-change-transform"
        style={{
          x: mainX,
          y: mainY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="relative flex items-center justify-center p-1 rounded-full bg-white/95 shadow-sm border border-red-600/30 pointer-events-none"
          animate={{
            scale: isClicked ? 0.85 : isPointer ? 1.25 : 1,
            rotate: isPointer ? -6 : 0,
            boxShadow: isPointer 
              ? '0 4px 12px rgba(220, 38, 38, 0.25)' 
              : '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
          transition={{
            type: 'spring',
            damping: 22,
            stiffness: 350,
            mass: 0.15
          }}
        >
          <Landmark className="w-3.5 h-3.5 text-red-600 fill-red-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};
