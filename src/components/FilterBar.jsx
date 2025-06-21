import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Resume from '../assets/Resume.pdf'; 

const categories = [
  { name: 'Resume', external: Resume },
  { name: 'Must watch YT videos', external: 'https://youtube.com/playlist?list=PLi2uDlkkRasLwv4rDnaLF8CB9lCD-Qp7e&si=Jh-rh_iBVVIN3frC' },
  { name: 'Freelace Work', path: '/freelance' },
  { name: 'Placement Tips & Tricks', external: 'https://www.youtube.com/playlist?list=PLI9IU_4HLCWGticImP63VgDx3XG83LsOp' },
  { name: 'Linkedin', external: 'https://www.linkedin.com/in/drashtisanjayshah/' },
  { name: 'GitHub', external: 'https://github.com/DrashtiSanjayShah' },
  { name: 'Certifications', external: 'https://drive.google.com/drive/folders/16LAVwVvn2WORqqTWsg9Hzt7KAdHXK0xS?usp=share_link' },
  { name: 'My Fav YT channels', path: '/channels' },
  { name: 'Project Recommendations', path: '/projects' },
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
