import React from "react";
import { ContainerPage } from "./styled";
import { Header } from "./styled";
import { MainHome } from "./styled";

export const Home =(props)=>{
    return(
    <ContainerPage>
        <Header>Eu sou o header da home</Header>
        <MainHome>
            <h1>Eu sou a Home</h1>
            <button onClick={props.goAddSer}>Adicionar Serviço</button>
            <button onClick={props.goContrataSer}>Contratar Serviço</button>
            <button onClick={props.goCarrinho}>Carrinho</button>
            <button onClick={props.goDetalheSer}>Detalhes serviço</button>
        </MainHome>
    </ContainerPage>
)}