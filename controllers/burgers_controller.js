// This is our Express controller file, used for GET and POST functions

const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// We want to keep everything on one page, so redirect the user to the index
router.get('/', (req, res) => {
    res.redirect('/index');
});

// Display the index and display the burgers
router.get('/index', (req, res) => {
    burger.selectAll((data) => {
        let hbsObject = {
            burgers: data
        };

        res.render('index', hbsObject);
    }); 
});

// Create a new burger for consumption and then redirect to the index to keep everything on one page
router.post('/burger/create', (req, res) => {
    burger.insert(req.body.burger_name, () => {
        res.redirect('/index');
    });
});

// Devour a burger (flag it as eaten, do not remove from the database) and then redirect to the index to keep everything on one page
router.post('/burger/eat/:id', (req, res) => {
    burger.devour(req.params.id, () => {
        res.redirect('/index');
    })
})

// Export
module.exports = router;