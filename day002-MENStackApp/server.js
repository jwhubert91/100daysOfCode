// Tutorial taken from here:
// https://www.freecodecamp.org/news/develop-deploy-first-fullstack-web-app/

// Load Node modules
var express = require('express');
// Initialize express
var app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on
app.listen(8080);
