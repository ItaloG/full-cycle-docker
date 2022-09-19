const express = require("express");
const mysql = require("mysql");

const app = express();
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) VALUES ('italo')`;
connection.query(sql);

const users = connection.query("SELECT * FROM people");

connection.end();

app.get("/", (req, res) => {
  res.send(`
  <h1>Full Cycle Rocks!</h1>

  <p>- Lista de nomes cadastrada no banco de dados.</p>
  ${users}
  `);
});

app.listen(3000, () => console.log("Rodando na porta  3000"));
