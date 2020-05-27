import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../helpers/app-helpers';

const CategoryFilter = ({ filterCategory }) => {
  const handleFilterChange = event => {
    const { value } = event.target;
    filterCategory(value);
  };
  return (
    <div className="category-filter">
      <h3>
        Choose view category:
      </h3>
      <select
        name="category"
        onChange={handleFilterChange}
        className="drop-down"
      >
        <option value="All">
          All
        </option>
        { categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  filterCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
