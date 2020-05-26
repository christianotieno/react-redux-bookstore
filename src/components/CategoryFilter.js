import React from 'react';
import PropTypes from 'prop-types';

const selectBox = (categories) => {
    categories.push('All');
    return (
        <select>        
            {categories.map(category => <option key={category.id}>{category}</option>)}
        </select>
    );
}

export default selectBox;