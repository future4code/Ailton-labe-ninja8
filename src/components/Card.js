import React from "react";

export const Card = (props) => {
  return (
    <div>
      <p>{props.servico.title}</p>
      <div>
        <p>{props.servico.dueDate.slice(0, 10)}</p>
        <p>{props.servico.price}</p>
      </div>
      <div>
        {props.servico.taken === false ? (
          <button
            onClick={() => {
              props.adicionarCarrinho(props.servico);
            }}
          >
            Adicionar ao Carrinho
          </button>
        ) : (
          <p onClick={() => {
            props.adicionarCarrinho(props.servico);
          }}>Indisponivel</p>
        )}

        <button
          onClick={() => {
            props.goDetalheSer(props.servico);
          }}
        >
          Ver detalhes
        </button>
      </div>
    </div>
  );
};
