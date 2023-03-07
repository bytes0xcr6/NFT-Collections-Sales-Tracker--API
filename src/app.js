require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { connector } = require("./mysql.js");

app.get("/", (req, res) => {
  res.send("Welcome to my Server!");
});

app.get("/api/users", (req, res) => {
  connector.query("SELECT * FROM users", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});

// console.log(connector);
