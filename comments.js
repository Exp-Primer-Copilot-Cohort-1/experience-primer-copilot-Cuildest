// Create web server
var express = require('express');
var app = express();

// Create a new comment
app.post('/', function(req, res) {
  res.send('Create a new comment');
});

// Retrieve a comment
app.get('/:id', function(req, res) {
  res.send('Retrieve a comment');
});

// Update a comment
app.put('/:id', function(req, res) {
  res.send('Update a comment');
});

// Delete a comment
app.delete('/:id', function(req, res) {
  res.send('Delete a comment');
});

module.exports = app;