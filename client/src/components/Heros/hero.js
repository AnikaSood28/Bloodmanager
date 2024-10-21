// Heroes.js
import React from 'react';
import './Heroes.css'; // Ensure your CSS file is correctly imported

const heroesData = [
  {
    name: "Buddy",
    image: "https://via.placeholder.com/150", // Placeholder image
    description: "Buddy is a loyal companion known for his bravery and love for people.",
  },
  {
    name: "Max",
    image: "https://via.placeholder.com/150", // Placeholder image
    description: "Max is a gentle giant who has saved countless lives with his heroic acts.",
  },
  {
    name: "Bella",
    image: "https://via.placeholder.com/150", // Placeholder image
    description: "Bella is an adventurous spirit, always ready to help and comfort those in need.",
  },
  {
    name: "Charlie",
    image: "https://via.placeholder.com/150", // Placeholder image
    description: "Charlie is a fearless protector who never hesitates to lend a paw.",
  },
  {
    name: "Daisy",
    image: "https://via.placeholder.com/150", // Placeholder image
    description: "Daisy is a sweet and caring soul, always putting others before herself.",
  },
  // Add more dogs as needed
];

const Heroes = () => {
  return (
    <div className="heroes-section">
      <h2>Hero Dogs</h2>
      <p className="thank-you-message">Thank you to these brave dogs for saving lives!</p>
      <div className="scroll-container">
        <div className="heroes-list">
          {heroesData.map((dog, index) => (
            <div key={index} className="hero-item">
              <img src={dog.image} alt={dog.name} className="hero-image" />
              <div className="dog-name">{dog.name}</div> {/* Separate div for name */}
              <div className="dog-description">{dog.description}</div> {/* Separate div for description */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Heroes;
