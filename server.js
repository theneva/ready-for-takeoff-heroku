const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Heroku!');
});

const port = process.env.PORT || 1234;
app.listen(port, () => console.log('listening on port', port));
