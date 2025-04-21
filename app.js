const express = require('express');

const app = express();


//routes, Home page
app.get('/', (req, res) => {
    res.send("on home");
});


//Post page
app.get('/posts', (req, res) => {
    res.send("on Posts page");
});

//How to listen
app.listen(3000);
