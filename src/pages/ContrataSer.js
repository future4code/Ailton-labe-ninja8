import React from "react";
import { ContainerPageSer,  } from "./styled";
import { HeaderContrataSer, ImagemHeader, InputSearch, CampoDePesquisa } from "./styled";
import { Main, MostraCards } from "./styled";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";
import logo from "../assets/logoHeader2.png";

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
      <HeaderContrataSer>
        <ImagemHeader src={logo} onClick={props.goHome}/>
        <InputSearch
            placeholder="Busca"
            onChange={props.onChangeSearch}
            value={props.inputSearch}
          />
        <button onClick={props.goCarrinho}>Carrinho</button>
      </HeaderContrataSer>
      <Main>
        <CampoDePesquisa>
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
        </CampoDePesquisa>

        <MostraCards>{MostraCard}</MostraCards>
      </Main>
      <Footer />
    </ContainerPageSer>
  );
};
