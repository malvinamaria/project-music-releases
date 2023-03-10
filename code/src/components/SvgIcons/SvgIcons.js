import React from 'react';
import './SvgIcons.css';

export const SvgIcons = () => {
  return (
    <div className="icons-container">
      <img className="heart-icon white" src="./icons/heart.svg" alt="heart" />
      <img className="play-icon white" src="./icons/play.svg" alt="play" />
      <img className="dots-icon white" src="./icons/dots.svg" alt="dots" />
    </div>
  );
};
