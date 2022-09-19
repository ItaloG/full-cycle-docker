const express = require("express");
const app = express();
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) VALUES ('italo')`;
connection.query(sql);
connection.end();

app.get("/", (req, res) => {
  res.send("Full Cycle");
});

app.listen(3000, () => console.log("Rodando na porta  3000"));
