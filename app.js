const express = require('express');
const cors = require('cors');
const logger = require('morgan'); //for seeing api calls in terminal
const PORT = 8524;

const app = new express();

require('./Middlewares/MongoDB');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
// Able to receive data from the frontend to the backend
const api = require('./routes/api');
app.use('/api', api);

const path = require('path');
app.use(express.static('./dist/frontend'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist//frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
