// SpotlightSection.js
import React from 'react';
import './S.css'; // CSS file for styling

const SpotlightSection = () => {
  return (
    <div className="spotlight-section">
      <h2>The Spotlight on Us</h2>
      <p>
        We don't just save dogs. We create heroes and make headlines.
      </p>
      <p>
        Join us in celebrating the brave dogs who give their all to save lives. 
        Their stories inspire us to be better, to do more, and to continue the mission 
        of making the world a safer place for everyone. 
      </p>
      <p>
        Together, we can shine a light on their heroic deeds and show that 
        every pawprint can make a difference!
      </p>
      <div className="impact-stats">
        <h3>Impact Statistics</h3>
        <div className="stats-container">
          <div className="stat-item">
            <h4>100+</h4>
            <p>Dogs Saved</p>
          </div>
          <div className="stat-item">
            <h4>50+</h4>
            <p>Heroic Stories</p>
          </div>
          <div className="stat-item">
            <h4>10+</h4>
            <p>Lives Changed</p>
          </div>
        </div>
      </div>
      <p className="call-to-action">
        Join our mission and help us make a difference today!
      </p>
    </div>
  );
};

export default SpotlightSection;
