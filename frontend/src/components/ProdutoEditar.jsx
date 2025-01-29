import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "../styles/ProdutoEditar.css"

const ProdutoEditar = ({ produto, atualizarLista, fecharModal }) => {

  const [nome, setNome] = useState(produto.nome);
  const [quantidade, setQuantidade] = useState(produto.quantidade);
  const [valor, setValor] = useState(produto.valor);

  const handleEditar = async (e) => {

    e.preventDefault();

    try {

      await axios.put(`http://localhost:5000/produtos/${produto.id}`, {

        nome,
        quantidade: parseInt(quantidade, 10),
        valor: parseFloat(valor),

      });

      Swal.fire("Sucesso!", "Produto atualizado com sucesso.", "success");
      atualizarLista();
      fecharModal();

    } catch (error) {

      console.error("Erro ao editar produto", error);
      Swal.fire("Erro!", "Não foi possível editar o produto.", "error");
      
    }
  };

  return (
    <form onSubmit={handleEditar}>
      <h2>Editar Produto</h2>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
      <input type="number" step="0.01" value={valor} onChange={(e) => setValor(e.target.value)} />
      <button type="submit">Salvar Alterações</button>
      <button type="button" onClick={fecharModal}>Cancelar</button>
    </form>
  );
};

export default ProdutoEditar;
