import React from "react";
import { MainHome, HeaderHome, Header, ContainerPage, ImagemHeader } from "./styled";
import oi from "../assets/logoHeader1.png"

export const Home =(props)=>{
    return(
    <ContainerPage>
        <Header>
            <HeaderHome>
                <ImagemHeader src={oi} />
                  </HeaderHome>
            </Header>
        <MainHome>
            <h1>Eu sou a Home</h1>
            <button onClick={props.goAddSer}>Adicionar Serviço</button>
            <button onClick={props.goContrataSer}>Contratar Serviço</button>
            <button onClick={props.goCarrinho}>Carrinho</button>
            <button onClick={props.goDetalheSer}>Detalhes serviço</button>
        </MainHome>
    </ContainerPage>
)}