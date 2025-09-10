const express = require('express');
const mongodb = require('./data/database');
const app = express();
const PORT = process.env.PORT || 3000;

// Paths
app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}/`);
    });
  }
});
