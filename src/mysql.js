require("dotenv").config();
const mysql = require("mysql2");

const connector = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "691718775",
  database: "",
});
