import React from "react";
import {CardItem, ImgLixeira} from "./styled"
import lixeira from "../assets/Lixeira.png"


export const CardCarrinho = (props) => {
 
  return (
    <CardItem>
      <p className="title">{props.servico.title}</p>
      <p className="price">R$ {props.servico.price}</p>
      <ImgLixeira src={lixeira}
        onClick={() => {
          props.removerCarrinho(props.servico);
        }}
      />
    </CardItem>
  );
};
