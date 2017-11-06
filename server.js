const db = require('mongoose');
const express = require('express');
const app = express();

const username = 'theneva';
const password = 'hellomlab';
const dbUri = `mongodb://${username}:${password}@ds149855.mlab.com:49855/theneva-colors`;
db.connect(dbUri, { useMongoClient: true });

const Color = db.model('Color', {
  name: String,
  hex: String,
});

app.get('/', (req, res) => {
  res.send('Hello from Heroku!');
});


app.get('/colors', (req, res) => {
  Color.find((err, colors) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(colors);
  });
});

const port = process.env.PORT || 1234;
app.listen(port, () => console.log('listening on port', port));
