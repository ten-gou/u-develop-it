const express = require('express');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');
const PORT = process.env.PORT || 3001;
const app = express();

// Add near the top of the file
// connects to index as default
const apiRoutes = require('./routes/apiRoutes');

// Add after Express middleware
app.use('/api', apiRoutes);

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
// Will override any routes placed below it such as GET POST, etc
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });