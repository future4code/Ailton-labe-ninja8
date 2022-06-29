import React from "react";
import { ContainerPage } from "./styled";
import { Header } from "./styled";
import { Main } from "./styled";
import { Footer } from "../components/Footer";
import { CardCarrinho } from "../components/CardCarrinho";

export const Carrinho = (props) => {
  let soma = 0;
  const MostraItemCarrinho = props.carrinho.map((item) => {
    soma += item.price;
    return (
      <CardCarrinho
        key={item.id}
        removerCarrinho={props.removerCarrinho}
        servico={item}
      />
    );
  });
  return (
    <ContainerPage>
      <Header>
        Eu sou o header Carrinho
        <button onClick={props.goContrataSer}>Voltar</button>
        <button onClick={props.goHome}>Home</button>
      </Header>
      <Main>
        <h1>Carrinho</h1>
        {soma !== 0 ? (
          <div>
            {MostraItemCarrinho}
            <button onClick={() => props.removerTodoCarrinho(false)}>
              Remover tudo
            </button>
            <button onClick={() => props.removerTodoCarrinho(true)}>
              Finalizar compra
            </button>
            <p>Valor total: {soma}</p>
          </div>
        ) : (
          <p>Carrinho vazio</p>
        )}
      </Main>
      <Footer />
    </ContainerPage>
  );
};
