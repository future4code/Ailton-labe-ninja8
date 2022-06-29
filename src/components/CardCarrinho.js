import React from "react";

export const CardCarrinho = (props) => {
  return (
    <div>
      <p>{props.servico.title}</p>
      <p>{props.servico.price}</p>
      <button
        onClick={() => {
          props.removerCarrinho(props.servico);
        }}
      >
        Remover do Carrinho
      </button>
    </div>
  );
};
