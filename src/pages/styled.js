import styled from "styled-components";
import {
  CorRosa,
  CorVerde,
  CorAmarelo,
  AzulClaro,
  AzulEscuro,
} from "../constants/cores";
import inclusao from "../assets/uniao.jpg";

export const CarrinhoVazio = styled.h2`
  margin-top: 100px;
  color: ${AzulEscuro};
`;

export const ContainerPage = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const ImgHeaderAdd = styled.img`
  height: 80%;
  cursor: pointer;
`;

export const ContainerAddServ = styled.div`
  display: flex;
  width: 550px;
  border-radius: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  background-color: #b9fbc0;
  h1 {
    color: ${AzulEscuro};
    margin: 10px 0;
  }
  input {
    width: 300px;
    height: 28px;
    padding-left: 12px;
  }
  @media screen and (max-width: 480px) {
    width: 340px;
  }
`;

export const Method1 = styled.p`
  background-color: ${(props) => (props.bool === true ? props.cor : "none")};
  padding: 3px;
  border-radius: 6px;
`;
export const Method2 = styled.p`
  background-color: ${(props) => (props.bool === true ? props.cor : "none")};
  padding: 2px 4px;
  border-radius: 6px;
  text-align: center;
  display: inline;
  margin: 2px;
`;

export const DivMethods = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ButtonAdd = styled.button`
  height: 30px;
  padding: 4px 12px;
  margin-top: 10px;
  background: -webkit-linear-gradient(
    360deg,
    #ef476f,
    #ffd166,
    #06d6a0,
    #118ab2,
    #073b4c
  );
  border: none;
  width: fit-content;
  color: white;
  border-radius: 8px;
  text-shadow: 0.8px 0.8px 2px black;
  font-weight: 900;
  font-size: 18px;
  cursor: pointer;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

export const ContainerMethods = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  cursor: pointer;
`;
export const BoxMethods = styled.div`
  display: flex;
  user-select: none;
  flex-direction: column;
  padding: 6px;
  width: 300px;
  color: ${AzulEscuro};
  font-weight: 600;
  gap: 8px;
  justify-content: center;
  background-color: #469d89;
  border-radius: 5px;
`;

export const ContainerPageSer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const Header = styled.header`
  width: 100%;
  height: 10vh;
`;

export const HeaderContrataSer = styled.header`
  width: 100%;
  height: 10vh;
  background-color: ${CorVerde};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 10vh;
  padding: 0 20px;
`;

export const HeaderAddServ = styled.header`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  height: 10vh;
  background-color: ${CorRosa};
`;

export const ImagemHeader = styled.img`
  height: 80%;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    height: 60%;
  }
`;

export const MainAddServ = styled.main`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  align-items: center;
`;

export const MainDetalhe = styled.main`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c9e4de;
`;
export const Main = styled.main`
  width: 100%;
  min-height: 90vh;
  height: 100%;
  background-color: #feeafa;
`;
export const MainHome = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #b9fbc0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media screen and (max-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
    .Logo {
      grid-area: 3/1/4/6;
      width: 80vw;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 380px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(7, 1fr);
    .Logo {
      grid-area: 4/1/5/6;
      width: 80vw;
      margin: 0 auto;
    }
  }
`;

export const Servico = styled.img`
  margin-top: 220px;
  height: 200px;
  width: 200px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.7s;
  :hover {
    border-radius: 100px;
    transition: 0.7s;
  }
  @media screen and (min-width: 761px) and (max-width: 1280px) {
    grid-area: 4/2/5/3;
    margin: 0 auto;
  }
  @media screen and (min-width: 381px) and (max-width: 760px) {
    grid-area: 4/2/5/3;
    margin: 0 auto;
    height: 150px;
    width: 150px;
  }
  @media screen and (max-width: 380px) {
    grid-area: 3/1/4/6;
    margin: 0 auto;
    height: 150px;
    width: 150px;
  }
`;
export const Servico2 = styled.img`
  margin-top: 220px;
  height: 200px;
  width: 200px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.7s;
  :hover {
    border-radius: 100px;
    transition: 0.7s;
  }
  @media screen and (min-width: 761px) and (max-width: 1280px) {
    grid-area: 4/4/5/5;
    margin: 0 auto;
  }
  @media screen and (min-width: 381px) and (max-width: 760px) {
    grid-area: 4/4/5/5;
    margin: 0 auto;
    height: 150px;
    width: 150px;
  }
  @media screen and (max-width: 380px) {
    grid-area: 5/1/6/6;
    margin: 0 auto;
    height: 150px;
    width: 150px;
  }
`;

export const ButtonServ = styled.button`
  margin-left: 20px;
  width: 185px;
  height: 115px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  background: -webkit-linear-gradient(
    360deg,
    #ef476f,
    #ffd166,
    #06d6a0,
    #118ab2,
    #073b4c
  );
  p {
    color: white;
    text-shadow: 1.5px 1.5px 2px black;
  }
`;

export const HomeButton = styled.button`
  background-color: ${CorVerde};
  width: 60px;
  height: 25px;
  margin-left: 5px;
  border: none;
  border-radius: 5px;
`;
export const ServButton = styled.button`
  background-color: ${CorVerde};
  width: 60px;
  height: 25px;
  margin-left: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const InputServ = styled.input`
  background-color: ${CorAmarelo};
  margin: 5px;
  border: none;
  border-radius: 5px;
`;
export const InputServDois = styled.textarea`
  background-color: ${CorVerde};
  padding-left: 12px;
  min-height: 80px;
  max-height: 400px;
  min-width: 300px;
  max-width: 300px;
  margin: 5px;
  border: none;
  border-radius: 5px;
`;
export const InputServTres = styled.input`
  background-color: ${AzulClaro};
  margin: 5px;
  border: none;
  border-radius: 5px;
`;
export const InputServQuatro = styled.input`
  background-color: ${CorRosa};
  margin: 5px;
  border: none;
  border-radius: 5px;
`;

export const InputSearch = styled.input`
  padding: 12px 50px;
  border: none;
  border-radius: 8px;
  @media screen and (max-width: 480px) {
    width: 200px;
  }
`;

export const MostraCards = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
  padding: 25px 10px;
`;

export const CampoDePesquisa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  gap: 8px;
  flex-wrap: wrap;
  input,
  select {
    padding: 10px;
    width: 300px;
    border: none;
    border-radius: 8px;
  }
`;
export const CarrinhoDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const MainCarrinho = styled.div`
  height: 90vh;
  width: 100%;
  background-color: #feeafa;
`;
export const DivBottom = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  width: 100%;
  height: 25px;
  display: flex;
  padding: 40px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
    padding-bottom: 10px;
  }
`;
export const Titulo = styled.h1`
  padding: 25px;
  color: #3a0ca3;
`;

export const CaixinhaDetalhes = styled.div`
  width: 50%;
  min-width: 340px;
  height: 65%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #f2b5d4;
  h1 {
    font-size: 47px;
    color: #758bfd;
  }
  p {
    font-size: 20px;
    color: ${AzulEscuro};
  }
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 40px;
    }
  }
`;

export const BotoesDetalhes = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
    margin-top: 5px;
  }
`;
export const ButtonVoltar = styled.button`
  cursor: pointer;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #cbf3f0;
  color: ${CorRosa};
  margin-top: 8px;
`;

export const SectionNos = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Sobre = styled.div`
  background-image: url(${inclusao});
  background-size: cover;
  background-position: center;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Descricao = styled.div`
  height: 40%;
  width: 80%;
  padding: 20px 30px;
  /* margin:0 auto; */
  flex-grow: 25;

  h1 {
    font-size: 40px;
    color: #000814;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    h1 {
      font-size: 28px;
    }
  }
`;

export const ButtonMenu = styled.div`
  position: fixed;
  left: 20px;
  top: 20px;
  transform: rotate(90deg);
  border-radius: 22px;
  padding: 16px 12px;
  background-color: #eb6d8b;
  color: ${AzulEscuro};
  font-weight: 500;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  :hover {
    background-color: pink;
  }
`;

export const Menu = styled.div`
  position: fixed;
  left: 28px;
  top: 70px;
  width: 120px;
  /* background-color: pink; */
  color: ${AzulEscuro};
  font-size: 18px;
  text-align: start;
  a {
    text-decoration: none;
    color: unset;
  }
  li {
    background-color: #eb6d8b;
    list-style: none;
    padding: 8px;
    margin-top: 4px;
    border-radius: 8px;
    :hover {
      background-color: pink;
    }
  }
`;

export const FraseFinal = styled.div`
  width: 100%;
  height: 20%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  p {
    font-size: 35px;
    font-weight: bold;
    color: #000814;
    text-shadow: 1px 1px 1px white;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    flex-grow: 2;
    p {
      font-size: 30px;
    }
  }
`;
