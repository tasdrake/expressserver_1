const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.send('Hello from API');
});
app.use('/:id', (req, res) => {
  res.statusCode = 404;
  res.statusMessage = 'Not found';
  res.send('404 Not found');
});
app.listen(3000, () => {
  console.log('listening on port 3000');
});
