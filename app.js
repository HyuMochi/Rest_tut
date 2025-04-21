const express = require('express');

const app = express();

const mongoose = require('mongoose');
const uri = "mongodb+srv://Admin:PhanHieu31@stamky.ti7hu0s.mongodb.net/?retryWrites=true&w=majority&appName=stamky";
//connect to mongoDB
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);




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
