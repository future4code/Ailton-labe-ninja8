import React from "react";
import {
  CardServico,
  ButaoCard,
  CardTitulo,
  ButaoCards,
  ImgCarrinho,
} from "./styled";
import Carrinho1 from "../assets/CarrinhoV.png";
import Carrinho2 from "../assets/CarrinhoC.png";

export const Card = (props) => {
  const statusServ = props.carrinho.filter((item) => {
    return item.id === props.servico.id;
  });
  return (
    <CardServico>
      <CardTitulo>
        <strong>{props.servico.title}</strong>
      </CardTitulo>
      <div>
        <p>Até {props.servico.dueDate.slice(0, 10)}</p>
        <p>R$ {props.servico.price}</p>
      </div>
      <ButaoCard>
        {statusServ.length === 0 ? (
          <ImgCarrinho
            src={Carrinho1}
            onClick={() => {
              props.adicionarCarrinho(props.servico);
            }}
          />
        ) : (
          <ImgCarrinho src={Carrinho2} />
        )}
        {props.segredinho >= 5 && (
          <ButaoCards
            onClick={() => {
              props.deleteJob(props.servico.id);
            }}
          >
            DELETAR
          </ButaoCards>
        )}
        <ButaoCards
          onClick={() => {
            props.goDetalheSer(props.servico);
          }}
        >
          Ver detalhes
        </ButaoCards>
      </ButaoCard>
    </CardServico>
  );
};
