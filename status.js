const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

// Function buat random nilai
function getRandomValue(min, max, unit = '') {
  const value = Math.floor(Math.random() * (max - min + 1)) + min;
  return `${value}${unit}`;
}

// API route
app.get('/api/status', (req, res) => {
  const data = {
    bandwidth: getRandomValue(50, 300, " Mbps"),
    ping: getRandomValue(2, 40, "ms"),
    ram: `${getRandomValue(100, 1024)}Mb/1Tb`,
    cpu: `${getRandomValue(1, 1000)}%`
  };

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`);
});
