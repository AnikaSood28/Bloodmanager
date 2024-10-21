import React from 'react';
import './Home.css'; // Import the CSS file
import VideoSection from '../components/Video/videosection';
import BlogSection from '../components/Blogs/blogs';
import HealthTracking from '../components/Pettracker/Health';
import Heroes from '../components/Heros/hero';
import SpotlightSection from '../components/Spotlights/spotlight';
import Footer from '../components/foot/foot';

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="fas fa-paw"></i> {/* Add an icon here */}
            Animal Blood Bank
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-home"></i> {/* Home icon */}
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-info-circle"></i> {/* About Us icon */}
                  About Us
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <a href="/login" className="btn btn-custom me-2">Login</a>
              <a href="/register" className="btn btn-custom">Register</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>WE CARE COZ YOU CARE <br /> ABOUT YOUR PET</h1>
        </div>
      </div>

      {/* Scrollable Content Below */}
      <div className="page-content">
        <VideoSection/>
        <BlogSection/>
        <HealthTracking/>
        <Heroes/>
        <SpotlightSection/>
        <Footer/>
       
      </div>
    </div>
  );
};

export default Home;
