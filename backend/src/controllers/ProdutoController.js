const { Produto } = require("../models");

const ProdutoController = {

    async listar(req, res) {
        try {
            const produtos = await Produto.findAll();
            res.json(produtos);
        } catch (error) {
            res.status(500).json({ erro: "Erro ao listar os produtos" });
        }
    },

    async criar(req, res) {
        const { nome, quantidade, valor } = req.body;
        try {
            const produto = await Produto.create({ nome, quantidade, valor });
            res.json(produto);
        } catch (error) {
            res.status(500).json({ erro: "Erro ao adicionar o produto" });
        }
    },

    async atualizar(req, res) {
        const { id } = req.params;
        const { nome, quantidade, valor } = req.body;

        try {
            const produto = await Produto.findByPk(id);
            if (!produto) {
                return res.status(404).json({ erro: "O produto não foi encontrado" });
            }

            await produto.update({ nome, quantidade, valor });
            res.json(produto);
        } catch (error) {
            res.status(500).json({ erro: "Erro ao atualizar o produto" });
        }
    },

    async modificarQuantidade(req, res) {
        const { id, acao } = req.params;
        try {
            const produto = await Produto.findByPk(id);
            if (!produto) {
                return res.status(404).json({ erro: "O produto não foi encontrado" });
            }

            if (acao === "incrementar") produto.quantidade++;
            if (acao === "decrementar" && produto.quantidade > 0) produto.quantidade--;

            await produto.save();
            res.json(produto);
        } catch (error) {
            res.status(500).json({ erro: "Erro ao modificar a quantidade" });
        }
    },

    async deletar(req, res) {
        const { id } = req.params;
        try {
            const produto = await Produto.findByPk(id);
            if (!produto) {
                return res.status(404).json({ erro: "O produto não foi encontrado" });
            }

            await produto.destroy();
            res.json({ mensagem: "O produto foi removido com sucesso." });
            
        } catch (error) {
            res.status(500).json({ erro: "Erro ao remover o produto" });
        }
    },
};

module.exports = ProdutoController;
