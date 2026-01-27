import './Headshot.css';

import headshotImage from '../assets/Headshot.jpg'; 
import { Link } from 'react-router-dom';
const Headshot = () => {
  return (
    <div className="headshot-container">
      <Link to="/about">
        <img 
          src={headshotImage} 
          alt="Headshot" 
          className="headshot-img" 
        />
      </Link>
    </div>
  );
};

export default Headshot;