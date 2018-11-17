// This is our Express controller file, used for GET and POST functions
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// We want to keep everything on one page, so everything redirects to the index
router.get('/', (req, res) => {
  burger.selectAll((data) => {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});

// Insert a new burger while staying on the index
router.post('/burgers', (req, res) => {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], (data) => {
    res.redirect('/');
  });
});

// Devours a burger (simply flags it as devoured, does not remove from database) while staying on the index
router.put('/burgers/:id', (req, res) => {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, (data) => {
    res.redirect('/');
  });
});

// Export
module.exports = router;