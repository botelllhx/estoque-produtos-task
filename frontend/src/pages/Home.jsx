import React, { useEffect, useState } from "react";
import axios from "axios";
import ProdutoItem from "../components/ProdutoItem";
import ProdutoForm from "../components/ProdutoForm";
import "../styles/Home.css";

const Home = () => {

  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = async () => {

    try {

      const resposta = await axios.get("http://localhost:5000/produtos");

      const produtosOrdenados = resposta.data.sort((a, b) => a.id - b.id);

      setProdutos(produtosOrdenados);

    } catch (error) {

      console.error("Erro ao buscar produtos", error);

    }

  };

  useEffect(() => {

    carregarProdutos();

  }, []);

  return (

    <div className="container">

      <h1>Gestão de Estoque</h1>

      {/* form de cadastro */}
      <ProdutoForm atualizarLista={carregarProdutos} />

      {/* tabela de produtos */}

      <div className="tabela-container">

        <h2>Produtos em Estoque</h2>

        <table className="tabela-produtos">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Valor (R$)</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.length > 0 ? (
              produtos.map((produto) => (
                <ProdutoItem key={produto.id} produto={produto} atualizar={carregarProdutos} />
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>Nenhum produto foi encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
