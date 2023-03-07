require("dotenv").config();
const mysql = require("mysql2");

const connector = mysql.createPool({
  host: process.env.HOST,
  port: process.env.PORT_DB,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

connector.execute("SELECT * FROM users", (err, result) => {
  console.log(typeof result);
});
module.exports = { connector };
