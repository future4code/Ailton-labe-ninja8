import React from "react";
import { ContainerPage } from "./styled";
import { Header } from "./styled";
import { Main } from "./styled";
import { Footer } from "../components/Footer";

export const DetalheSer = (props) => {
  const statusServ = props.allJobs.filter((item) => {
    return item.id === props.servico.id;
  });
  return (
    <ContainerPage>
      <Header>
        <button onClick={props.goHome}>Home</button>
        <button onClick={props.goCarrinho}>Carrinho</button>
      </Header>
      <Main>
        <h1>Detalhe Serviço</h1>
        <div>
          <p>{props.servico.title}</p>
          <div>
            <p>Aceita:{props.servico.paymentMethods}</p>
          </div>
          <div>
            <p>Até {props.servico.dueDate.slice(0, 10)}</p>
            <p>:{props.servico.price}</p>
          </div>
          <div>{props.servico.description}</div>
          {statusServ[0].taken === false ? (
            <button
              onClick={() => {
                props.adicionarCarrinho(props.servico);
              }}
            >
              Adicionar ao Carrinho
            </button>
          ) : (
            <p>
              Já adicionado no carrinho
            </p>
          )}

          <button onClick={props.goContrataSer}>Voltar para a lista</button>
        </div>
      </Main>
      <Footer />
    </ContainerPage>
  );
};
