const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes/index");
// auth
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DB Config auth
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// Routes
app.use(routes);


// Local Database
// Connect to the Mongo DB
// mongoose.connect(

// "mongodb://localhost/gravesholdInn"


// );

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// mongodb+srv://Deepali:<Jaimatadi1>@cluster0-qrqyf.mongodb.net/test?retryWrites=true&w=majority