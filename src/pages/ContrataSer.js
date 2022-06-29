import React from "react";
import { ContainerPage } from "./styled";
import { Header } from "./styled";
import { Main } from "./styled";
import { Footer } from "../components/Footer";

export const ContrataSer =(props)=>{
    return(
    <ContainerPage>
        <Header> <button onClick={props.goHome}>Home</button> </Header>
       
        <Main>
            <div>
        <h1>Contrata Serviço</h1>
          <input placeholder="Busca"
          onChange={props.onChangeSearch}
          value={props.inputSearch}/>
          <input min={0} placeholder="Valor Minimo" type={"Number"}
          onChange={props.onChangeMin} value={props.inputMin}
          />
          <input min={0} placeholder="Valor Maximo" type={"Number"}
           onChange={props.onChangeMax}  value={props.inputMax}
          />
        <select onChange={props.onChangeSelect}>
            <option>Crescente</option>
            <option>Decrescente</option>
            <option>Prazos</option>
        </select>
            </div>
        

          
            <div>
                
            </div>
        </Main>
        <Footer/>
    </ContainerPage>
)}