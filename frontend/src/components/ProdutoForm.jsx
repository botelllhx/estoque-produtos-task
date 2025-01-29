import React, { useState } from "react";
import axios from "axios";
import "../styles/ProdutoForm.css";

const ProdutoForm = ({ atualizarLista }) => {

    const [nome, setNome] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [valor, setValor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome || !quantidade || !valor) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            await axios.post("http://localhost:5000/produtos", {
                nome,
                quantidade: parseInt(quantidade, 10),
                valor: parseFloat(valor),
            });

            setNome("");
            setQuantidade("");
            setValor("");

            atualizarLista();

        } catch (error) {
            console.error("Erro ao adicionar produto", error);
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <h2>Adicionar Produto</h2>
            <input
                type="text"
                placeholder="Nome do Produto"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input
                type="number"
                placeholder="Quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
            />
            <input
                type="number"
                step="0.01"
                placeholder="Valor (R$)"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />
            <button type="submit">Cadastrar Produto</button>
        </form>
        
    );
};

export default ProdutoForm;
