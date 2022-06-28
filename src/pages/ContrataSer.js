import React from "react";
import { ContainerPage } from "./styled";
import { Header } from "./styled";
import { Main } from "./styled";
import { Footer } from "../components/Footer";

export const ContrataSer =(props)=>{
    return(
    <ContainerPage>
        <Header>Eu sou o header do Contrata Serviço </Header>
        <Main>
        <h1>Contrata Serviço</h1>
            <button onClick={props.goHome}>Home</button>
        </Main>
        <Footer/>
    </ContainerPage>
)}