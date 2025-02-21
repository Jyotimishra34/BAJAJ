import React from 'react';

const Filters = ({ selectedFilters, setSelectedFilters }) => {
  const options = ['numbers', 'alphabets', 'highest_alphabet'];

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedFilters(prev =>
      prev.includes(value) ? prev.filter(f => f !== value) : [...prev, value]
    );
  };

  return (
    <div className="filters">
      <label>Filters: </label>
      {options.map(opt => (
        <label key={opt}>
          <input
            type="checkbox"
            value={opt}
            checked={selectedFilters.includes(opt)}
            onChange={handleChange}
          />
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </label>
      ))}
    </div>
  );
};

export default Filters;
