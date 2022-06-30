import React from "react";
import { ContainerPage } from "./styled";
import { Header } from "./styled";
import { MainDetalhe, BotoesDetalhes,DivMethods, ButtonVoltar } from "./styled";
import { Footer } from "../components/Footer";
import { HeaderContrataSer, ImagemHeader, CaixinhaDetalhes } from "./styled";
import { ImgCarrinho } from "../components/styled";
import logo from "../assets/logoHeader2.png";
import carrinho from "../assets/CarrinhoV.png";
import {
  CorRosa,
  CorVerde,
  CorAmarelo,
  AzulClaro,
  AzulEscuro,
} from "../constants/cores";
import { Method2 } from "./styled";

export const DetalheSer = (props) => {
  const statusServ = props.carrinho.filter((item) => {
    return item.id === props.servico.id;
  });
  const paymentMethodsColors = props.servico.paymentMethods.map((item) => {
    if (item === "Pix") {
      return (
        <Method2 cor={CorRosa} bool={true}>
          Pix
        </Method2>
      );
    } else if (item === "Debito") {
      return (
        <Method2 cor={"#b388eb"} bool={true}>
          Debito
        </Method2>
      );
    } else if (item === "Credito") {
      return (
        <Method2 cor={CorAmarelo} bool={true}>
          Credito
        </Method2>
      );
    } else if (item === "Boleto") {
      return (
        <Method2 cor={AzulClaro} bool={true}>
          Boleto
        </Method2>
      );
    } else {
      return (
        <Method2 cor={CorVerde} bool={true}>
          PayPal
        </Method2>
      );
    }
  });
  return (
    <ContainerPage>
      <HeaderContrataSer>
        <ImagemHeader src={logo} onClick={props.goHome} />
        <ImgCarrinho src={carrinho} onClick={props.goCarrinho} />
      </HeaderContrataSer>
      <MainDetalhe>
        <CaixinhaDetalhes>
          <h1>{props.servico.title}</h1>
          <DivMethods>
            <p>Formas de pagamento aceitas:</p><p>{paymentMethodsColors}</p>
          </DivMethods>
          <div>
            <p>
              Até {props.servico.dueDate.slice(0, 10)} por R$
              {props.servico.price}
            </p>
          </div>
          <p>{props.servico.description}</p>

          <BotoesDetalhes>
            <ButtonVoltar onClick={props.goContrataSer}>
              Voltar para a lista
            </ButtonVoltar>
            {statusServ.length === 0 ? (
              <ButtonVoltar
                onClick={() => {
                  props.adicionarCarrinho(props.servico);
                }}
              >
                Adicionar ao Carrinho
              </ButtonVoltar>
            ) : (
              <p>Item adicionado no carrinho</p>
            )}
          </BotoesDetalhes>
        </CaixinhaDetalhes>
      </MainDetalhe>
    </ContainerPage>
  );
};
