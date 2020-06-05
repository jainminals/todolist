const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const dburi = require('./config/key')


// how to use middleware
// app.use((req,res,next) => {
//     req.greetings = "hello"
//     return next()
// })
const mongoDbURI = dburi
mongoose
  .connect(mongoDbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const greet = "Welcome to CRUD application";
  //render method is used to render the handlebars template first parameter
  //  will be the name of the template file and second paramter you can send the data from server (like  greet)
  res.render("index", {
    greetMessage: greet,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/showtask", (req, res) => {
  res.render("showtask");
});
app.get("/addtask", (req, res) => {
  res.render("addtask");
});



app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
