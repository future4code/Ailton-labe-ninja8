import React from "react";
import {
  MainHome,
  HeaderHome,
  Header,
  ContainerPage,
  ImagemHeader,
  ButtonAdd,
  ButtonServ,
  Servico,
} from "./styled";
import oi from "../assets/logoHeader1.png";
import Logo from "../assets/logo.pageHome.png";
import servico from "../assets/Adicionar-Serviço.png"
import contratar from "../assets/Contratar-Serviço.png"


export const Home = (props) => {
  return (
    <ContainerPage>
      <MainHome>
             <Servico  onClick={props.goAddSer} src={servico}/>
        <img src={Logo} />
        <Servico src={contratar} onClick={props.goContrataSer}/>
      </MainHome>
    </ContainerPage>
  );
};
