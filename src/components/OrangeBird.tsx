import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const OrangeBird = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isMouseActive, setIsMouseActive] = useState(false);
  const [screenPosition, setScreenPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse activity tracking
  useEffect(() => {
    let mouseTimer: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setIsMouseActive(true);
        
        clearTimeout(mouseTimer);
        mouseTimer = setTimeout(() => {
          setIsMouseActive(false);
        }, 2000); // Mouse considered idle after 2 seconds
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseTimer);
    };
  }, [isMobile]);

  // Screen traversal animation for idle state and mobile
  useEffect(() => {
    if (isMobile || !isMouseActive) {
      const animateAcrossScreen = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        
        // Random starting position (left or right side)
        const startFromLeft = Math.random() > 0.5;
        const startX = startFromLeft ? -100 : screenWidth + 100;
        const endX = startFromLeft ? screenWidth + 100 : -100;
        
        // Random Y position (avoiding top and bottom edges)
        const randomY = Math.random() * (screenHeight * 0.6) + (screenHeight * 0.2);
        
        setScreenPosition({ x: startX, y: randomY });
        
        // Animate to end position
        setTimeout(() => {
          setScreenPosition({ x: endX, y: randomY });
        }, 100);
      };

      // Initial animation
      animateAcrossScreen();
      
      // Set interval for continuous animation
      const speed = isMobile ? 8000 : 6000; // Slower on mobile
      const interval = setInterval(animateAcrossScreen, speed);
      
      return () => clearInterval(interval);
    }
  }, [isMobile, isMouseActive]);

  // Scroll visibility handling
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(window.scrollTimeout);
    };
  }, []);

  // Respect user's motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    return null;
  }

  // Calculate bird position
  const getBirdPosition = () => {
    if (isMobile || !isMouseActive) {
      return {
        left: screenPosition.x,
        top: screenPosition.y,
      };
    } else {
      return {
        left: Math.max(0, mousePosition.x - 120),
        top: Math.max(0, mousePosition.y - 30),
      };
    }
  };

  const birdPosition = getBirdPosition();

  return (
    <motion.div
      className="fixed pointer-events-none z-40"
      style={birdPosition}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{
        type: "spring",
        stiffness: isMobile || !isMouseActive ? 50 : 150,
        damping: isMobile || !isMouseActive ? 25 : 20,
        opacity: { duration: 0.2 },
        x: { 
          duration: isMobile || !isMouseActive ? 6 : 0.5,
          ease: "easeInOut"
        },
        y: { 
          duration: isMobile || !isMouseActive ? 6 : 0.5,
          ease: "easeInOut"
        }
      }}
    >
      {/* Orange Bird SVG */}
      <motion.svg
        width="60"
        height="40"
        viewBox="0 0 60 40"
        className="drop-shadow-sm"
        animate={{
          rotate: isMobile || !isMouseActive ? [0, 3, -3, 0] : [0, 2, -2, 0],
          y: isMobile || !isMouseActive ? [0, -3, 3, 0] : [0, -2, 2, 0],
        }}
        transition={{
          duration: isMobile || !isMouseActive ? 3 : 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Bird Body */}
        <ellipse
          cx="30"
          cy="25"
          rx="18"
          ry="12"
          fill="#f97316"
          className="drop-shadow-sm"
        />
        
        {/* Bird Head */}
        <circle
          cx="45"
          cy="20"
          r="10"
          fill="#ea580c"
        />
        
        {/* Beak */}
        <polygon
          points="52,20 58,18 52,22"
          fill="#fb923c"
        />
        
        {/* Eye */}
        <circle
          cx="48"
          cy="18"
          r="2"
          fill="white"
        />
        <circle
          cx="49"
          cy="17"
          r="1"
          fill="black"
        />
        
        {/* Wing with enhanced animation */}
        <motion.ellipse
          cx="25"
          cy="22"
          rx="8"
          ry="6"
          fill="#c2410c"
          animate={{
            scaleY: isMobile || !isMouseActive ? [1, 0.7, 1] : [1, 0.8, 1],
            rotate: isMobile || !isMouseActive ? [0, -5, 5, 0] : [0, -3, 3, 0],
          }}
          transition={{
            duration: isMobile || !isMouseActive ? 0.8 : 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Tail */}
        <ellipse
          cx="12"
          cy="28"
          rx="6"
          ry="4"
          fill="#9a3412"
        />
      </motion.svg>
    </motion.div>
  );
};

export default OrangeBird;