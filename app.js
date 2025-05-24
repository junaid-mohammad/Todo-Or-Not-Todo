// -------------------------------------------------------------
// app.js – Entry Point for To-Do List Web App (v1)
// -------------------------------------------------------------
// This file initializes an Express server, renders dynamic EJS 
// views, and manages two in-memory task lists: one for general 
// use and one for work-related tasks. Data is not persistent.
// -------------------------------------------------------------

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); // Custom module to get current date

const port = 3000;
const app = express();

// Default list for general items; work list is separate
const items = [
  "Buy Food", 
  "Cook Food", 
  "Eat Food"
];
const workItems = [
  "Reply to client emails",
  "Update project documentation",
  "Push latest code to GitHub"
];

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Middleware to parse form data and serve static files
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Route: GET "/" → render default to-do list with today's date
app.get("/", function(req, res) {
  const day = date.getDate(); // Get formatted current date
  res.render("list", {
    listTitle : day,   // Use current date as list title
    newItems : items   // Display general to-do list items
  });
});

// Route: POST "/" → handle form submission for new items
app.post("/", function(req, res) {
  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);  // Add to work list
    res.redirect("/work");
  } else {
    items.push(item);      // Add to general list
    res.redirect("/");
  }
});

// Route: GET "/work" → render work-specific to-do list
app.get("/work", function(req, res) {
  res.render("list", {
    listTitle : "Work List",
    newItems : workItems
  });
});

// Route: GET "/about" → show static about page
app.get("/about", function(req, res) {
  res.render("about");
});

// Start the server
app.listen(port, function() {
  console.log("Server is running on port " + port + ".");
});
