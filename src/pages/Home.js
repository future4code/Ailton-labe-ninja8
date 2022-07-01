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
  SectionNos,
  Sobre,
  Descricao,
  FraseFinal,

} from "./styled";
import oi from "../assets/logoHeader1.png";
import Logo from "../assets/logo.pageHome.png";
import servico from "../assets/Adicionar-Serviço.png"
import contratar from "../assets/Contratar-Serviço.png"
import { Footer } from "../components/Footer";


export const Home = (props) => {
  return (
    <ContainerPage>
      <section>
      <MainHome>
             <Servico  onClick={props.goAddSer} src={servico}/>
        <img src={Logo} />
        <Servico src={contratar} onClick={props.goContrataSer}/>
      </MainHome>
      </section>
      <SectionNos>
       <Sobre>
        <Descricao>
      <h1>Nós da Rainbow Services buscamos atender as necessidades de todes da melhor forma possível, buscando sempre prezar pelo respeito e inclusão de todes</h1>
        </Descricao>
        <FraseFinal>
          <p>Serviços de todes para todes</p>
          </FraseFinal>
       </Sobre>
      </SectionNos>
  <Footer/>
    </ContainerPage>
  );
};
