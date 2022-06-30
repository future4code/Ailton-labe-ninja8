import React from "react";
import { ContainerPage } from "./styled";
import { Header } from "./styled";
import { MainDetalhe, BotoesDetalhes, ButtonVoltar} from "./styled";
import { Footer } from "../components/Footer";
import {HeaderContrataSer, ImagemHeader, CaixinhaDetalhes} from "./styled";
import { ImgCarrinho } from "../components/styled";
import logo from "../assets/logoHeader2.png";
import carrinho from "../assets/CarrinhoV.png"

export const DetalheSer = (props) => {
  const statusServ = props.allJobs.filter((item) => {
    return item.id === props.servico.id;
  });
  return (
    <ContainerPage>
     <HeaderContrataSer>
        <ImagemHeader src={logo} onClick={props.goHome}/>
        <ImgCarrinho src={carrinho} onClick={props.goCarrinho}/>
               
        </HeaderContrataSer>
      <MainDetalhe>
        <CaixinhaDetalhes>
          <h1>{props.servico.title}</h1>
          <div>
            <p>Aceita:{props.servico.paymentMethods}</p>
          </div>
          <div>
            <p>Até {props.servico.dueDate.slice(0, 10)}  por R${props.servico.price}</p>
          </div>
          <p>{props.servico.description}</p>

          <BotoesDetalhes>
          <ButtonVoltar onClick={props.goContrataSer}>Voltar para a lista</ButtonVoltar>
          {statusServ[0].taken === false ? (
            <ButtonVoltar
              onClick={() => {
                props.adicionarCarrinho(props.servico);
              }}
            >
              Adicionar ao Carrinho
            </ButtonVoltar>

          ) : (
            <p>
              Item adicionado no carrinho
            </p>
          )}
            </BotoesDetalhes>
         
        </CaixinhaDetalhes>
      </MainDetalhe>
  
    </ContainerPage>
  );
};
