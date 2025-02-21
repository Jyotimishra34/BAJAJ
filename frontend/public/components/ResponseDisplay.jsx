import React from 'react';

const ResponseDisplay = ({ response, selectedFilters }) => {
  const filteredData = {};
  if (selectedFilters.includes('numbers')) filteredData.numbers = response.numbers;
  if (selectedFilters.includes('alphabets')) filteredData.alphabets = response.alphabets;
  if (selectedFilters.includes('highest_alphabet')) filteredData.highest_alphabet = response.highest_alphabet;

  return (
    <div className="response">
      <h2>Filtered Response</h2>
      {Object.entries(filteredData).map(([key, value]) => (
        <p key={key}>{key}: {value.join(', ')}</p>
      ))}
    </div>
  );
};

export default ResponseDisplay;
