const express = require("express");
const mysql = require("mysql2");

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

let users;

connection.execute("SELECT * FROM people", (err, results, fields) => {
  users = results;
});

app.get("/", (req, res) => {
  res.send(`
  <h1>Full Cycle Rocks!</h1>

  <p>- Lista de nomes cadastrada no banco de dados.</p>
  ${users.map((user) => `<p>${user.name}</p>`)}
  `);
});

app.listen(3000, () => console.log("Rodando na porta  3000"));
