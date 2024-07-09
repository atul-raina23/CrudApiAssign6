const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
