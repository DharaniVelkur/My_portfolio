import React, { useState, useEffect } from 'react';
import './UpArrowButton.css'; // You can style the button using CSS

const UpArrowButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { // Show the button when scrolled down by 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`up-arrow-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>      <i className="fas fa-arrow-up"></i>

    </button>
  );
};

export default UpArrowButton;
