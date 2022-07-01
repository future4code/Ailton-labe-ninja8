import React from "react";
import {
  MainHome,
  ContainerPage,
  Servico,
  Servico2,
  SectionNos,
  Sobre,
  Descricao,
  FraseFinal,
  ButtonMenu,
  Menu,
} from "./styled";
import Logo from "../assets/logo.pageHome.png";
import servico from "../assets/Adicionar-Serviço.png";
import contratar from "../assets/Contratar-Serviço.png";
import { Footer } from "../components/Footer";

export const Home = (props) => {
  return (
    <ContainerPage>
      <ButtonMenu onClick={props.onClickMostraMenu}>!!!</ButtonMenu>
      {props.mostraMenu === true && (
        <Menu>
          <ul>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#sobre">
              <li>Sobre nós</li>
            </a>
            <a href="#contatos">
              <li>Contato</li>
            </a>
          </ul>
        </Menu>
      )}
      <section>
        <MainHome id="home">
          <Servico onClick={props.goAddSer} src={servico} />
          <img className="Logo" src={Logo} />
          <Servico2 src={contratar} onClick={props.goContrataSer} />
        </MainHome>
      </section>
      <SectionNos>
        <Sobre id="sobre">
          <Descricao>
            <h1>
              Nós da Rainbow Services buscamos atender as necessidades de todes
              da melhor forma possível, buscando sempre prezar pelo respeito e
              inclusão de todes
            </h1>
          </Descricao>
          <FraseFinal>
            <p>Serviços de todes para todes</p>
          </FraseFinal>
        </Sobre>
      </SectionNos>
      <Footer />
    </ContainerPage>
  );
};
