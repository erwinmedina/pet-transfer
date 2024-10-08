const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const upload = require("multer")();

const cors = require('cors');
app.use(cors({
  origin: 'https://your-vercel-app.vercel.app', // Allow Vercel domain
  methods: ['POST', 'GET'], // Allow specific methods
}));

require('dotenv').config();
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/pets', upload.single("photo"), require('./routes/api/pets'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});