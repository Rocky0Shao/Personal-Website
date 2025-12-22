import './Headshot.css';

import headshotImage from '../assets/Headshot.jpg'; // 1. Import the image

const Headshot = () => {
  return (
    <div className="headshot-container">
      <img 
        src={headshotImage} 
        alt="Headshot" 
        className="headshot-img" 
      />
    </div>
  );
};

export default Headshot;