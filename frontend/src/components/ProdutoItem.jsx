import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import ProdutoEditar from "./ProdutoEditar";

const ProdutoItem = ({ produto, atualizar }) => {

  const [editando, setEditando] = useState(false);

  const modificarQuantidade = async (acao) => {

    if (acao === "decrementar" && produto.quantidade === 0) {

      const resultado = await Swal.fire({

        title: "Remover Produto?",
        text: "O produto está com 0 unidades. Deseja removê-lo do sistema?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sim, remover",
        cancelButtonText: "Cancelar",

      });

      if (resultado.isConfirmed) {

        try {

          await axios.delete(`http://localhost:5000/produtos/${produto.id}`);
          await Swal.fire("Removido!", "O produto foi removido com sucesso.", "success");

          atualizar();

        } catch (error) {

          console.error("Erro ao remover produto", error);
          Swal.fire("Erro!", "Não foi possível remover o produto.", "error");

        }
      }
      return;
    }

    try {

      await axios.patch(`http://localhost:5000/produtos/${produto.id}/${acao}`);

      atualizar();

    } catch (error) {

      console.error("Erro ao modificar quantidade", error);
      Swal.fire("Erro!", "Não foi possível modificar a quantidade.", "error");
      
    }
  };

  return (
    <>
      <tr>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.quantidade}</td>
        <td>{produto.valor.toFixed(2)}</td>
        <td>
          <button onClick={() => modificarQuantidade("incrementar")} className="btn-action incrementar">+</button>
          <button onClick={() => modificarQuantidade("decrementar")} className="btn-action decrementar">-</button>
          <button onClick={() => setEditando(true)} className="btn-action editar">✏️ Editar</button>
        </td>
      </tr>

      {editando && (
        <div className="modal">
          <div className="modal-content">
            <ProdutoEditar produto={produto} atualizarLista={atualizar} fecharModal={() => setEditando(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProdutoItem;
