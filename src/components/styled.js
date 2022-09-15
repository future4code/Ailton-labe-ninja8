import styled from "styled-components";
import {
  CorRosa,
  CorVerde,
  CorAmarelo,
  AzulClaro,
  AzulEscuro,
} from "../constants/cores";

export const ContainerMudaTela = styled.div`
  height: 100%;
  max-width: 100%;
  user-select: none;
`;

export const ContainerFooter = styled.div`
  background-color: #efc3e6;
  min-height: 30vh;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;

  a {
    text-decoration: none;
    color: unset;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
    padding: 12px;
  }
`;

export const Dev = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  a {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
`;
export const Redes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-top: 10px;
  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    padding-top: 16px;
  }
`;
export const RedesT = styled.p`
  padding-top: 15px;
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

///estilização cards///
export const CardServico = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  min-height: 180px;
  text-align: center;
  font-size: 20px;
  border-radius: 10px;
  gap: 10px;
  background-color: #e4c1f9;
  border: 2px solid #e4c1f9;
  p {
    color: #3d348b;
    font-size: bold;
  }
  :hover {
    border: 2px solid #ff99c8;
  }
  /* opacity: 80%; */
`;

export const ButaoCard = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
`;

export const CardTitulo = styled.div`
  margin-bottom: 14px;
  font-size: 28px;
  color: ${CorRosa};
  opacity: 100%;
`;

export const ButaoCards = styled.button`
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #ff99c8;
  color: #3d348b;
  cursor: pointer;
`;

export const ImgCarrinho = styled.img`
  height: 40px;
  cursor: pointer;
`;
export const ButtonLimpar = styled.button`
  padding: 10px;
  width: 150px;
  border: none;
  border-radius: 8px;
  background-color: #cbf3f0;
  color: ${CorRosa};
  cursor: pointer;
`;
export const CardItem = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  width: 500px;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 5px;
  justify-content: space-between;
  margin: 10px 0;
  background-color: #a9d6e5;
  border-radius: 5px;
  .title {
    width: 360px;
  }
  .price {
    width: 80px;
  }
  @media screen and (max-width: 520px) {
    width: 340px;
    .title {
      width: 200px;
    }
  }
`;
export const ImgLixeira = styled.img`
  height: 30px;
  cursor: pointer;
`;
export const ButaoRemover = styled.button`
  padding: 10px;
  width: 500px;
  border: none;
  border-radius: 8px;
  background-color: #ff99c8;
  color: #3a0ca3;
  cursor: pointer;
  @media screen and (max-width: 520px) {
    width: 340px;
  }
`;

///estilização cards///
