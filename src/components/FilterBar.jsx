import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Resume from '../assets/Resume.pdf'; 

const categories = [
  { name: 'Resume', external: Resume },
  { name: 'Must watch YT videos', external: '/must-watch' },
  { name: 'Freelace Work', path: '/freelance' },
  { name: 'Games', external: '/games' },
  { name: 'Linkedin', external: 'https://www.linkedin.com/in/drashtisanjayshah/' },
  { name: 'GitHub', external: 'https://github.com/DrashtiSanjayShah' },
  { name: 'Certifications', external: '/certifications' },
  { name: 'My Fav YT channels', external: '/fav-yt' },
  { name: 'Project Recommendations', external: '/projects' },
];

const FilterBar = () => (
  <div className="filter-bar">
    {categories.map((cat, idx) => {
      if (cat.external) {
        return (
          <a
            key={idx}
            href={cat.external}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button variant="secondary" className="rounded-pill">
              {cat.name}
            </Button>
          </a>
        );
      } else {
        return (
          <Link key={idx} to={cat.path} style={{ textDecoration: 'none' }}>
            <Button variant="secondary" className="rounded-pill">
              {cat.name}
            </Button>
          </Link>
        );
      }
    })}
  </div>
);

export default FilterBar;
