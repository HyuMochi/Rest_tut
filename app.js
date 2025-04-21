const express = require('express');

const app = express();

//Middlewares, middlewares block you from going in to a page and logs a message in the terminal. 
//app.use("/posts", () => {
//    console.log("This is a middleware running, you are on the posts page")
//})


//routes

//Home page
app.get('/', (req, res) => {
    //send response
    res.send("on home");
});


//Post page
app.get('/posts', (req, res) => {
    res.send("on Posts page");
});

//How to listen
app.listen(3000);
