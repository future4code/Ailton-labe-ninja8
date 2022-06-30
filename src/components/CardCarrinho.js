import React from "react";
import {CardItem, ImgLixeira} from "./styled"
import lixeira from "../assets/Lixeira.png"


export const CardCarrinho = (props) => {
 
  return (
    <CardItem>
      <p>{props.servico.title}</p>
      <p>R$ {props.servico.price}</p>
      <ImgLixeira src={lixeira}
        onClick={() => {
          props.removerCarrinho(props.servico);
        }}
      />
    </CardItem>
  );
};
