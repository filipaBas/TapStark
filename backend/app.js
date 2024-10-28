require('dotenv').config();
const express = require('express');
const cors = require('cors');
const gameRoutes = require('./routes/gameRoutes');

const app = express();
const port = 5003;

app.use(cors());

app.use('/api', gameRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});