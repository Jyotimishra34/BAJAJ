import React, { useState } from 'react';

const InputForm = ({ onSubmit, error }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const parsed = JSON.parse(input);
      if (!parsed.data || !Array.isArray(parsed.data)) throw new Error('Invalid JSON format');
      onSubmit(parsed);
    } catch (err) {
      alert('Invalid JSON: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter JSON e.g., {"data": ["A", "1"]}'
      />
      <button type="submit">Submit</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default InputForm;
