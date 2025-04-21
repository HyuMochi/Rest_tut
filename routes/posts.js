const express = require('express');

const router = express.Router();    

router.get('/', (req, res) => {
    res.send("on Posts page");
});

router.get('/specific', (req, res) => {
    res.send("on specific page");
});

module.exports = router; // Export the router object so it can be used in other files

