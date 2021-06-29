const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const publicFolder = "build";

app.use(express.static(path.join(__dirname, publicFolder)));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, publicFolder, "index.html"));
  });


// app.get("/api", (req, res) => {
//   res.json({ message: "No API HERE YET - until I add jpg fucntionality!" });
// });

app.listen((port), function() {
	console.log("listening on port " + (port))
});