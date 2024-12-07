import React, { useState } from 'react';
import '../Components.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [hoveredTopic, setHoveredTopic] = useState(null);

  const topics = ['crime 1'];

  const handleMouseEnter = (index) => {
    setHoveredTopic(index);
  };

  const handleMouseLeave = () => {
    setHoveredTopic(null);
  };

  const linkStyle = {
    textDecoration: 'none',
  };

  return (
    <div className="sidebar">
      {topics.map((topic, index) => (
        <Link key={index} to="/Crime" style={linkStyle}>
          <div
            className={`topic ${index % 2 === 0 ? 'white' : 'purple'} ${
              hoveredTopic === index ? 'dark-blue' : ''
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {topic}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
