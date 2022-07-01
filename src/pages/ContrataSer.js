import React from "react";
import {
  HeaderContrataSer,
  ContainerPageSer,
  ImagemHeader,
  InputSearch,
  CampoDePesquisa,
  Main,
  MostraCards,
} from "./styled";
import { Card } from "../components/Card";
import logo from "../assets/logoHeader2.png";
import carrinho from "../assets/CarrinhoV.png";
import { ImgCarrinho, ButtonLimpar } from "../components/styled";

let segredinho = 0;
export const ContrataSer = (props) => {
  const onClickSegredinho = () => {
    segredinho++;
  };
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
          carrinho={props.carrinho}
          goCarrinho={props.goCarrinho}
          goDetalheSer={props.goDetalheSer}
          adicionarCarrinho={props.adicionarCarrinho}
          deleteJob={props.deleteJob}
          segredinho={segredinho}
        />
      );
    });
  return (
    <ContainerPageSer>
      <HeaderContrataSer onClick={onClickSegredinho}>
        <ImagemHeader src={logo} onClick={props.goHome} />
        <InputSearch
          placeholder="Busca"
          onChange={props.onChangeSearch}
          value={props.inputSearch}
        />
        <ImgCarrinho onClick={props.goCarrinho} src={carrinho} />
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
          <ButtonLimpar onClick={props.limparCampos}>
            Limpar Campos
          </ButtonLimpar>
        </CampoDePesquisa>
        <MostraCards>{MostraCard}</MostraCards>
      </Main>
    </ContainerPageSer>
  );
};
