const express = require('express');
const categoriesRoutes = require('./routes/categories');

const app = express();
const port = 5000;

app.use('/categories', categoriesRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});