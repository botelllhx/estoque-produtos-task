const express = require("express");
const ProdutoController = require("../controllers/ProdutoController");

const router = express.Router();

router.get("/", ProdutoController.listar);
router.post("/", ProdutoController.criar);
router.put("/:id", ProdutoController.atualizar);
router.patch("/:id/:acao", ProdutoController.modificarQuantidade);
router.delete("/:id", ProdutoController.deletar);

module.exports = router;
