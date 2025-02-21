import './App.css';

import React, { useState } from 'react';

import Filters from './components/Filters';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';

function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleSubmit = async (jsonInput) => {
    try {
      const res = await fetch('YOUR_BACKEND_URL/bfhl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: jsonInput.data })
      });
      const data = await res.json();
      if (data.is_success) {
        setResponse(data);
        document.title = data.roll_number; // Set title to roll number
        setError('');
      } else {
        setError(data.error || 'API Error');
      }
    } catch (err) {
      setError('Failed to connect to API');
    }
  };

  return (
    <div className="container">
      <h1>{response?.roll_number || "Enter Data"}</h1>
      <InputForm onSubmit={handleSubmit} error={error} />
      {response && <Filters selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />}
      {response && <ResponseDisplay response={response} selectedFilters={selectedFilters} />}
    </div>
  );
}

export default App;
