const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// GET endpoint
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// POST endpoint
app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;
    if (!Array.isArray(data)) throw new Error("Invalid data format");

    let numbers = [];
    let alphabets = [];
    let highestAlphabet = null;

    data.forEach(item => {
      const strItem = String(item).trim();
      if (!isNaN(strItem)) {
        numbers.push(strItem);
      } else if (/^[A-Za-z]$/.test(strItem)) {
        const upperChar = strItem.toUpperCase();
        alphabets.push(upperChar);
        if (!highestAlphabet || upperChar.charCodeAt(0) > highestAlphabet.charCodeAt(0)) {
          highestAlphabet = upperChar;
        }
      }
    });

    res.json({
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highestAlphabet ? [highestAlphabet] : []
    });
  } catch (error) {
    res.status(400).json({
      is_success: false,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
