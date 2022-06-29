import React from "react";
import { ContainerPageSer } from "./styled";
import { Header } from "./styled";
import { Main } from "./styled";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

export const ContrataSer =(props)=>{
    console.log(props.allJobs)
    const MostraCard = props.allJobs.map((item)=>{
        return(
        <Card key={item.id}  servico={item}
        // title={item.title} price={item.price} dueDate={item.dueDate}
        goCarrinho={props.goCarrinho} goDetalheSer={props.goDetalheSer}
        adicionarCarrinho={props.adicionarCarrinho}
        />
        )
    })
    return(
    <ContainerPageSer>
        <Header><button onClick={props.goHome}>Home</button> </Header>
        <Main>
            <div>
        <h1>Contrata Serviço</h1>
            
            </div>
          
            <div>
            {MostraCard}
            </div>
        </Main>
        <Footer/>
    </ContainerPageSer>
)}