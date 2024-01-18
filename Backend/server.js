const express = require("express");
const mySql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

app.get("/", (req, res) => {
  return res.json("From backend get");
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("server is up and running");
});
