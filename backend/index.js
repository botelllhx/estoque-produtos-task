require("dotenv").config();
const express = require("express");
const cors = require("cors");

const produtoRoutes = require("./src/routes/produtoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/produtos", produtoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Servidor rodando na porta ${PORT}`);
  
});
