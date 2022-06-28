import React from "react";
import { ContainerPage } from "./styled";
import { Header } from "./styled";
import { Main } from "./styled";
import { Footer } from "../components/Footer";

export const DetalheSer =(props)=>{
    return(
    <ContainerPage>
        <Header>Eu sou o header Detalhe Serviço</Header>
        <Main>
            <h1>Detalhe Serviço</h1>
            <button onClick={props.goHome}>Home</button>

        </Main>
        <Footer/>
    </ContainerPage>
)}