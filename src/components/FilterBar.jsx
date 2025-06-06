import React from 'react';
import { Button } from 'react-bootstrap';

const categories = ['All', 'Resume', 'Must watch YT videos','MyFav Projects', 'Linkedin','GitHub', 'Certifications', 'Resources', 'My Fav YT channels'];

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
