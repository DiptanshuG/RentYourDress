import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTop.css'; // Import a CSS file to define the animation

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / maxScroll) * 100;

    setScrollProgress(progress);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {scrollProgress > 0 && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-button"
        >
          <FaArrowUp />
          <div
            className="scroll-progress"
            style={{ height: `${scrollProgress}%` }}
          ></div>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
