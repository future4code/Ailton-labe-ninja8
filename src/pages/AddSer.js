import React from "react";
import { ContainerPage } from "./styled";
import { Header, HomeButton, ServButton, InputServ, InputServTres, InputServDois } from "./styled";
import { Main } from "./styled";
import { Footer } from "../components/Footer";

export const AddSer = (props) => {
    return (
        <ContainerPage>
            <Header>Eu sou o header do Adiciona Serviço </Header>
            <Main>
                <div>
                    <h1>Adiciona Serviço</h1>
                    <HomeButton onClick={props.goHome}>Home</HomeButton>
                    <ServButton onClick={props.goContrataSer}>Serviços</ServButton>
                </div>
                <div>
                    <InputServ onChange={props.onChangeTitle} placeholder={'Titulo'} />
                    <InputServDois onChange={props.onChangeDescription} placeholder={'Descrição do serviço'} />
                    <InputServTres onChange={props.onChangePrice} type={'number'} min={0} placeholder={'Preço'} />
                    <div>
                        <h4>Formas de pagamento</h4>
                        <p onClick={() => props.onClickPayments(0)}>Pix</p>
                        <p onClick={() => props.onClickPayments(1)}>Debito</p>
                        <p onClick={() => props.onClickPayments(2)}>Credito</p>
                        <p onClick={() => props.onClickPayments(3)}>Boleto</p>
                        <p onClick={() => props.onClickPayments(4)}>PayPal</p>
                    </div>
                    <input onChange={props.onChangeDate} type={'date'} />
                    <button onClick={props.createJob}>Adicionar serviço</button>
                </div>
            </Main>
            <Footer />
        </ContainerPage>
    )
}

// onChangeTitle={this.props.onChangeTitle}
// onChangeDescription={this.props.onChangeDescription}
// onChangePrice={this.props.onChangePrice}
// onChangeDate={this.props.onChangeDate}
// inputTitle={this.props.inputTitle}
// inputDescription={this.props.inputDescription}
// inputPrice={this.props.inputPrice}
// paymentMethods={this.props.paymentMethods}
// onClickPayments={this.props.onClickPayments}