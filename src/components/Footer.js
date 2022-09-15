import React from "react";
import { ContainerFooter, Dev, Info, Redes, RedesT } from "./styled";
import git from "../assets/gitHub.png";
import face from "../assets/facebook-1.svg";
import whats from "../assets/whatsapp.svg";
import insta from "../assets/instagram-1.svg";

export const Footer = (props) => {
  return (
    <ContainerFooter id="contatos">
      <div>
        <h3>Desenvolvedores</h3>
        <Dev>
          <a href="https://github.com/GabeSales" target={"_blank"}>
            <img src={git} />
            <p>Gabriel</p>
          </a>
        </Dev>
        <Dev>
          <a href="https://github.com/phcsilva056" target={"_blank"}>
            <img src={git} />
            <p>Paulo</p>
          </a>
        </Dev>
        <Dev>
          <a href="https://github.com/aonosorah" target={"_blank"}>
            <img src={git} />
            <p>Mayara</p>
          </a>
        </Dev>
        <Dev>
          <a href="https://github.com/Myllenam" target={"_blank"}>
            <img src={git} />
            <p>Myllena</p>
          </a>
        </Dev>
      </div>
      <Info>
        <p>Telefone: (11)8756-6666</p>
        <p>E-mail: rainbowService@rainbow.com</p>
        <p>Política de Privacidade</p>
        <p>Política de Compliance</p>
        <p>Contratos</p>
        <p>Política de Segurança</p>
        <p>Ética de Compliance</p>
      </Info>
      <div>
        <RedesT>Redes Sociais:</RedesT>
        <Redes>
          <img src={insta} />
          <img src={face} />
          <img src={whats} />
        </Redes>
      </div>
    </ContainerFooter>
  );
};
