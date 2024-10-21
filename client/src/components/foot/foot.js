// Footer.js
import React from 'react';
import './foot.css'; // Create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <i className="fas fa-paw footer-icon"></i> {/* Example icon */}
        <p>&copy; {new Date().getFullYear()} Animal Blood Bank. All Rights Reserved.</p>
        <p>Follow us on:</p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
