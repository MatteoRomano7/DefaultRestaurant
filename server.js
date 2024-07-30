const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const newsletterRoutes = require('./server/newsletterRoutes');

console.log('Starting server...');

const app = express();

console.log('Configuring middleware...');
app.use(bodyParser.json());

console.log('Setting up newsletter routes...');
app.use('/api/newsletter', newsletterRoutes);

console.log('Configuring static file serving...');
app.use(express.static(path.join(__dirname, 'build')));

console.log('Setting up catchall route...');
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

console.log('Setting up error handling...');
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});