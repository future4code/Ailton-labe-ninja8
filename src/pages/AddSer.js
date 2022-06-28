import React from "react";
import { ContainerPage } from "./styled";
import { Header } from "./styled";
import { Main } from "./styled";
import { Footer } from "../components/Footer";

export const AddSer =(props)=>{
    return(
    <ContainerPage>
        <Header>Eu sou o header do Adiciona Serviço </Header>
        <Main>
        <h1>Adiciona Serviço</h1>
            <button onClick={props.goHome}>Home</button>
        </Main>
        <Footer/>
    </ContainerPage>
)}