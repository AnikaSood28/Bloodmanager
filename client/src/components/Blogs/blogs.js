import React, { useEffect, useState, useRef } from 'react';
import './blogs.css'; // Import your CSS file

const BlogSection = () => {
  const [blogData, setBlogData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const blogContainerRef = useRef(null); // Create a ref for the blog container
  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
  };
  
  const fetchBlogs = async () => {
    setLoading(true);
    // Dummy blog data
    const newBlogs = [
        {
            id: generateUniqueId(),
            title: 'Can your dog donate blood?',
            description: 'Discover the eligibility criteria for dog blood donation.',
            imageUrl: 'https://via.placeholder.com/300', // Use a placeholder image for testing

            link: 'https://example.com/can-dog-donate-blood', // Replace with actual link
          },
          {
            id:generateUniqueId(),
            title: 'Dog blood types',
            description: 'Learn about the different blood types in dogs and their importance.',
            imageUrl: 'https://via.placeholder.com/300',
            link: 'https://example.com/dog-blood-types', // Replace with actual link
          },
          {
            id: generateUniqueId(),
            title: 'Looking after our donor dogs',
            description: 'Welfare is always our top priority for donor dogs.',
            imageUrl: 'https://via.placeholder.com/300',
            link: 'https://example.com/welfare-donor-dogs', // Replace with actual link
          },
    ];
    
    // Simulating network delay
    setTimeout(() => {
      setBlogData((prev) => [...prev, ...newBlogs]);
      setLoading(false);
    }, 1000); // 1-second delay for simulation
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  // Function to auto-scroll the blog section
  const autoScroll = () => {
    if (blogContainerRef.current) {
      blogContainerRef.current.scrollBy({
        top: 1, // Scroll down by 1 pixel
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  useEffect(() => {
    fetchBlogs();
    window.addEventListener('scroll', handleScroll);
    const interval = setInterval(autoScroll, 30); // Adjust the interval time for scrolling speed
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval); // Clean up the interval
    };
  }, [page]);

  return (
    <div className="blog-section">
      <h2>Find out more about your dog becoming a lifesaver</h2>
      <div className="blog-container" ref={blogContainerRef}> {/* Attach the ref here */}
        {blogData.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.imageUrl} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button className="read-more" onClick={() => window.open(post.link, '_blank')}>
              Read More
            </button>
          </div>
        ))}
      </div>
  

      {/* Curved Line After Blog Section */}
      <div className="curve-container">
        <svg width="100%" height="100" viewBox="0 0 800 100" preserveAspectRatio="none">
          <path d="M0,100 C400,0 400,0 800,100" stroke="#3498db" strokeWidth="5" fill="transparent"/>
        </svg>
      </div>
    </div>
  );
};

export default BlogSection;
