import React from "react";
import "./PreLoader.css"; // Import the styles

const Preloader = () => {
  
  
  const generateBubbles = () => {
    return Array.from({ length: 20 }).map((_, i) => (
      <div
        className="bubble"
        key={i}
        style={{
          left: `${Math.random() * 100}%`,  // Random horizontal position
          animationDelay: `${Math.random() * 1}s`, // Random delay
          animationDuration: `${Math.random() * 2 + 2}s`, // Faster bubble rise
        }}
      ></div>
    ));
  };
  
  

  return (
    <div className="page">
      <div className="water">
        {/* Water filling animation */}
        <div className="water-inner"></div> {/* Inner rising water */}
        <div className="wave"></div> {/* Rotating wave */}
        <div className="wave2"></div> {/* Secondary wave */}
        <div className="bubbles">{generateBubbles()}</div> {/* Bubbles */}
        
        {/* RetroSoda Text */}
        <div className="text">
          Retro<span>Soda</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
