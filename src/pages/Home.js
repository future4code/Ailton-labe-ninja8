import React from "react";
import {
  MainHome,
  HeaderHome,
  Header,
  ContainerPage,
  ImagemHeader,
  ButtonAdd,
  ButtonServ,
} from "./styled";
import oi from "../assets/logoHeader1.png";
import Logo from "../assets/logo.pageHome.png";


export const Home = (props) => {
  return (
    <ContainerPage>
      <Header>
        <HeaderHome>
          <ImagemHeader src={oi} />
        </HeaderHome>
      </Header>
      <MainHome>
        <ButtonAdd onClick={props.goAddSer}
        bgGradiant='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'>
            Adicionar Serviço </ButtonAdd>
        <img src={Logo} />
        <ButtonServ onClick={props.goContrataSer}>Contratar Serviço</ButtonServ>
      </MainHome>
    </ContainerPage>
  );
};
