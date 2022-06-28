import React from "react";
import { ContainerPage } from "./styled";
import { Header } from "./styled";
import { Main } from "./styled";
import { Footer } from "../components/Footer";

export const Carrinho =(props)=>{
    return(
    <ContainerPage>
        <Header>Eu sou o header Carrinho</Header>
        <Main>
        <h1>Carrinho</h1>
            <button onClick={props.goHome}>Home</button>
        </Main>
        <Footer/>
    </ContainerPage>
)}