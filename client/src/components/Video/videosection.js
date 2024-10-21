import React, { useState, useEffect } from 'react';
import videoData from './videoData'; // Adjust the import path as necessary
import './VideoSection.css'; // Import your CSS file

const VideoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [circlePosition, setCirclePosition] = useState(0); // State for circle position

  const handleVideoClick = (url) => {
    setCurrentVideoUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentVideoUrl('');
  };

  useEffect(() => {
    const handleScroll = () => {
      const videoSectionHeight = document.querySelector('.video-section').offsetHeight;
      const scrollY = window.scrollY;

      // Adjust the circle position as the user scrolls
      const newCirclePosition = Math.min(scrollY - videoSectionHeight + 50, 150);
      setCirclePosition(newCirclePosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="video-section">
      <h2>"Paws for a Cause: Inspiring Tales of Canine Donations"</h2>
      <div className="video-grid">
        {videoData.map((video) => (
          <div className="video-card" key={video.id}>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <img 
                src={`https://img.youtube.com/vi/${video.videoUrl.split('/').pop()}/hqdefault.jpg`} // Fixed dynamic URL
                alt={video.title} 
                style={{ width: '100%', borderRadius: '10px' }} 
                onClick={() => handleVideoClick(video.videoUrl)} 
              />
              <button 
                onClick={() => handleVideoClick(video.videoUrl)} 
                style={{
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)', 
                  background: 'rgba(255, 255, 255, 0.7)', 
                  border: 'none', 
                  borderRadius: '50%', 
                  padding: '10px',
                  cursor: 'pointer',
                  zIndex: 1, // Ensure button is above the image
                }}
              >
                <i className="fas fa-play" style={{ fontSize: '24px', color: 'black' }}></i>
              </button>
            </div>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>

      {/* Curved Line and Circle */}
      <div className="curve-container" style={{ position: 'relative' }}> {/* Added position relative */}
        <svg width="100%" height="200" viewBox="0 0 800 200" preserveAspectRatio="none">
          <path id="curve" d="M0,200 C400,100 400,100 800,200" stroke="#3498db" strokeWidth="5" fill="transparent"/>
        </svg>
        <div
          className="circle"
          style={{
            position: 'absolute',
            top: `${circlePosition}px`, // Wrapped in curly braces
            left: '50%',
            transform: 'translateX(-50%)',
            transition: 'top 0.2s ease', // Smooth transition
            width: '20px', // Adjust size as needed
            height: '20px', // Adjust size as needed
            backgroundColor: '#3498db', // Color of the circle
            borderRadius: '50%', // Make it a circle
          }}
        ></div>
      </div>

      {isOpen && (
        <div className="modal" onClick={closeModal} style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <iframe 
            width="560" 
            height="315" 
            src={currentVideoUrl} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            style={{ borderRadius: '10px' }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
