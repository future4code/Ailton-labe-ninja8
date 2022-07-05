import React from "react";
import { ContainerPage, CarrinhoVazio } from "./styled";
import { Header } from "./styled";
import { MainCarrinho } from "./styled";
import { Footer } from "../components/Footer";
import { CardCarrinho } from "../components/CardCarrinho";
import { HeaderContrataSer, ImagemHeader } from "./styled";
import logo from "../assets/logoHeader2.png";
import { CarrinhoDiv, DivBottom, Titulo } from "./styled";
import { ButaoCards, ButaoRemover } from "../components/styled";

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
      <HeaderContrataSer>
        <ImagemHeader src={logo} onClick={props.goHome} />
        <ButaoCards onClick={props.goContrataSer}>
          Voltar para a lista
        </ButaoCards>
      </HeaderContrataSer>
      <MainCarrinho>
        <CarrinhoDiv>
          <Titulo>Carrinho</Titulo>
          <ButaoRemover onClick={() => props.removerTodoCarrinho(false)}>
            Remover tudo
          </ButaoRemover>
          {soma !== 0 ? (
            <div>
              {MostraItemCarrinho}
              <DivBottom>
                <p>Valor total: R$ {soma}</p>
                <ButaoCards onClick={() => props.removerTodoCarrinho(true)}>
                  Finalizar compra
                </ButaoCards>
              </DivBottom>
            </div>
          ) : (
            <CarrinhoVazio>Carrinho vazio</CarrinhoVazio>
          )}
        </CarrinhoDiv>
      </MainCarrinho>
    </ContainerPage>
  );
};
