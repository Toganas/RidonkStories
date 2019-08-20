//DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes/index");
const db = require("./config/keys").mongoURI;

//START EXPRESS
const app = express();

//PORT
const PORT = process.env.PORT || 3001;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// MONGOOSE
mongoose
  .connect(
    "mongodb+srv://Deepali:Jaimatadi1@cluster0-qrqyf.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// PASSPORT
app.use(passport.initialize());
require("./config/passport")(passport);

//HEROKU
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//ROUTES
app.use(routes);


// START SERVER WITH PORT
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

