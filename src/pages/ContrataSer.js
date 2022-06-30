import React from "react";
import { ContainerPageSer } from "./styled";
import { Header } from "./styled";
import { Main } from "./styled";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

export const ContrataSer = (props) => {
  const MostraCard = props.allJobs
    .filter((item) => {
      if (
        item.title.toLowerCase().includes(props.inputSearch.toLowerCase()) &&
        item.price >= props.inputMin &&
        item.price <= props.inputMax
      ) {
        return item;
      }
    })
    .map((item) => {
      return (
        <Card
          key={item.id}
          servico={item}
          // title={item.title} price={item.price} dueDate={item.dueDate}
          goCarrinho={props.goCarrinho}
          goDetalheSer={props.goDetalheSer}
          adicionarCarrinho={props.adicionarCarrinho}
        />
      );
    });
  return (
    <ContainerPageSer>
      <Header>
        <button onClick={props.goHome}>Home</button>
        <button onClick={props.goCarrinho}>Carrinho</button>
      </Header>
      <Main>
        <div>
          <h1>Contrata Serviço</h1>
          <input
            placeholder="Busca"
            onChange={props.onChangeSearch}
            value={props.inputSearch}
          />
          <input
            min={0}
            placeholder="Valor Minimo"
            type={"Number"}
            onChange={props.onChangeMin}
            value={props.inputMin}
          />
          <input
            min={0}
            placeholder="Valor Maximo"
            type={"Number"}
            onChange={props.onChangeMax}
            value={props.inputMax}
          />
          <select onChange={props.onChangeSelect}>
            <option>Serviços</option>
            <option>Crescente</option>
            <option>Decrescente</option>
            <option>Prazos</option>
          </select>
          <button onClick={props.limparCampos}>Limpar Campos</button>
        </div>

        <div>{MostraCard}</div>
      </Main>
      <Footer />
    </ContainerPageSer>
  );
};
