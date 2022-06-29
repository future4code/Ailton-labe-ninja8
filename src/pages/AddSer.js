import React from "react";
import {
  ContainerPage,
  ContainerAddServ,
  ContainerMethods,
  MainAddServ,
  HeaderAddServ,
  BoxMethods,
  Method1,
  ButtonAdd,
  ImgHeaderAdd,
} from "./styled";
import {
  Header,
  HomeButton,
  ServButton,
  InputServ,
  InputServTres,
  InputServDois,
  InputServQuatro,
} from "./styled";
import { Footer } from "../components/Footer";
import {
  CorRosa,
  CorVerde,
  CorAmarelo,
  AzulClaro,
  AzulEscuro,
} from "../constants/cores";
import logo from "../assets/logoHeader2.png";

export const AddSer = (props) => {
  return (
    <ContainerPage>
      <HeaderAddServ>
        <ImgHeaderAdd onClick={props.goHome} src={logo} />
        <ServButton onClick={props.goContrataSer}>Serviços</ServButton>
      </HeaderAddServ>
      <MainAddServ>
        <ContainerAddServ>
          <h1>Criar Serviço</h1>
          <InputServ onChange={props.onChangeTitle} placeholder={"Titulo"} />
          <InputServDois
            onChange={props.onChangeDescription}
            placeholder={"Descrição do serviço"}
          />
          <InputServTres
            onChange={props.onChangePrice}
            type={"number"}
            min={0}
            placeholder={"Preço"}
          />
          <BoxMethods>
            <h4>Formas de pagamento</h4>
            <ContainerMethods>
              <Method1
                cor={CorRosa}
                bool={props.paymentMethods[0]}
                onClick={() => props.onClickPayments(0)}
              >
                Pix
              </Method1>
              <Method1
                cor={"#b388eb"}
                bool={props.paymentMethods[1]}
                onClick={() => props.onClickPayments(1)}
              >
                Debito
              </Method1>
              <Method1
                cor={CorAmarelo}
                bool={props.paymentMethods[2]}
                onClick={() => props.onClickPayments(2)}
              >
                Credito
              </Method1>
              <Method1
                cor={AzulClaro}
                bool={props.paymentMethods[3]}
                onClick={() => props.onClickPayments(3)}
              >
                Boleto
              </Method1>
              <Method1
                cor={CorVerde}
                bool={props.paymentMethods[4]}
                onClick={() => props.onClickPayments(4)}
              >
                PayPal
              </Method1>
            </ContainerMethods>
          </BoxMethods>
          <InputServQuatro onChange={props.onChangeDate} type={"date"} />
          <ButtonAdd onClick={props.createJob}>Adicionar Serviço</ButtonAdd>
          <p>
            {props.AvisoErro}
            {props.AvisoOK}
          </p>
          
        </ContainerAddServ>
      </MainAddServ>
      <Footer />
    </ContainerPage>
  );
};

// onChangeTitle={this.props.onChangeTitle}
// onChangeDescription={this.props.onChangeDescription}
// onChangePrice={this.props.onChangePrice}
// onChangeDate={this.props.onChangeDate}
// inputTitle={this.props.inputTitle}
// inputDescription={this.props.inputDescription}
// inputPrice={this.props.inputPrice}
// paymentMethods={this.props.paymentMethods}
// onClickPayments={this.props.onClickPayments}
