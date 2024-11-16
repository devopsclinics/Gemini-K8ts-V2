const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the E-farming backend!');
});

app.listen(port, () => {
  console.log(`Backend API listening at http://localhost:${port}`);
});
