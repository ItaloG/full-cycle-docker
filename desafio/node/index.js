const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send(`
  <h1>Full Cycle Rocks!</h1>

  <p>- Lista de nomes cadastrada no banco de dados.</p>
  `);
});

app.listen(3000, () => console.log("Rodando na porta  3000"));
