import React from 'react';
import './Health.css'; // Import the CSS file
import { Link } from 'react-router-dom';
const HealthTracking = () => {
  return (
    <div className="health-tracking">
      <div className="tracking-container">
        {/* Left Side: Text */}
        <div className="tracking-info">
          <h2>Track Your Pet's Health</h2>
          <p>
            Keep your pet’s health in check by tracking their medical history and vaccination records. 
            This feature allows you to log vaccinations, vet visits, medications, and much more, ensuring 
            that your furry friend stays in top shape!
          </p>
          <p>
            By managing all your dog's health-related information in one place, 
            you can stay up-to-date on their well-being with ease.
          </p>
          <Link to="/health-tracking">
          <button className="track-now-button">Track Now</button>
          </Link>
        </div>

        {/* Right Side: Images */}
        <div className="tracking-images">
          <img src="https://via.placeholder.com/150" alt="Dog Health 1" />
          <img src="https://via.placeholder.com/150" alt="Dog Health 2" />
          <img src="https://via.placeholder.com/150" alt="Dog Health 3" />
        </div>
      </div>
    </div>
  );
};

export default HealthTracking;
