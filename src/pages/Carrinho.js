import React from "react";
import { ContainerPage } from "./styled";
import { Header } from "./styled";
import { Main } from "./styled";
import { Footer } from "../components/Footer";
import { CardCarrinho } from "../components/CardCarrinho";

export const Carrinho =(props)=>{
const MostraItemCarrinho = props.carrinho.map((item)=>{
    return(
        <CardCarrinho key={item.id}  servico={item}
        />
    )
})
    return(
    <ContainerPage>
        <Header>Eu sou o header Carrinho
            <button onClick={props.goContrataSer}>Voltar</button>
            <button onClick={props.goHome}>Home</button>
        </Header>
        <Main>
        <h1>Carrinho</h1>
           <div>
     {MostraItemCarrinho}
           </div>
        </Main>
        <Footer/>
    </ContainerPage>
)}