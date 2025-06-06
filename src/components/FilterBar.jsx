import React from 'react';
import { Button } from 'react-bootstrap';

const categories = [ 'Resume', 'Must watch YT videos','Freelace Work', 'Games','Linkedin','GitHub', 'Certifications', 'Resources', 'My Fav YT channels', 'Project Recommendations'];

const FilterBar = () => (
  <div className="filter-bar">
    {categories.map((cat, idx) => (
      <Button
        key={idx}
        variant="secondary"
        className="rounded-pill"
      >
        {cat}
      </Button>
    ))}
  </div>
);

export default FilterBar;
