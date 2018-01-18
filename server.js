const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const logger = require("morgan");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Setup http logger Morgan
logger('dev');


//Set up mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongod://localhost/nytreact"<
{
  useMongoClient: true
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });



app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
