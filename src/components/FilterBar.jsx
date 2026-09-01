import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Resume from '../assets/Resume.pdf';

const categories = [
  { name: 'Resume', external: Resume, download: true },
  { name: 'Must watch YT videos', external: 'https://youtube.com/playlist?list=PLi2uDlkkRasLwv4rDnaLF8CB9lCD-Qp7e&si=Jh-rh_iBVVIN3frC' },
  { name: 'Freelance work', scrollTo: 'my-projects' },
  { name: 'Placement tips & tricks', external: 'https://www.youtube.com/playlist?list=PLI9IU_4HLCWGticImP63VgDx3XG83LsOp' },
  { name: 'Linkedin', external: 'https://www.linkedin.com/in/drashtisanjayshah/' },
  { name: 'GitHub', external: 'https://github.com/DrashtiSanjayShah' },
  { name: 'Certifications', external: 'https://drive.google.com/drive/folders/16LAVwVvn2WORqqTWsg9Hzt7KAdHXK0xS?usp=share_link' },
  { name: 'My favourite YT channels', path: '/channels' },
  { name: 'Project recommendations', path: '/projects' },
];

const FilterBar = () => {
  const navigate = useNavigate();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="filter-bar">
      {categories.map((cat, idx) => {
        // ⬇️ SCROLL BUTTON
        if (cat.scrollTo) {
          return (
            <Button
              key={idx}
              variant="secondary"
              className="rounded-pill"
              onClick={() => handleScroll(cat.scrollTo)}
            >
              {cat.name}
            </Button>
          );
        }

        // ⬇️ EXTERNAL / DOWNLOAD
        if (cat.external) {
          return (
            <a
              key={idx}
              href={cat.external}
              target="_blank"
              rel="noopener noreferrer"
              download={cat.download ? '' : undefined}
              style={{ textDecoration: 'none' }}
            >
              <Button variant="secondary" className="rounded-pill">
                {cat.name}
              </Button>
            </a>
          );
        }

        // ⬇️ INTERNAL ROUTES
        return (
          <Link key={idx} to={cat.path} style={{ textDecoration: 'none' }}>
            <Button variant="secondary" className="rounded-pill">
              {cat.name}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default FilterBar;
