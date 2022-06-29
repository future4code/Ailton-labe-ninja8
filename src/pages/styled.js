import styled from "styled-components";
import {
  CorRosa,
  CorVerde,
  CorAmarelo,
  AzulClaro,
  AzulEscuro,
} from "../constants/cores";

export const ContainerPage = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImgHeaderAdd = styled.img`
  height: 80%;
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
`;

export const Method1 = styled.p`
  background-color: ${(props) => (props.bool === true ? props.cor : "none")};
  padding: 3px;
  border-radius: 6px;
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
  height: 60%;
  margin-top: 17px;
  margin-left: 10px;
`;

export const MainAddServ = styled.main`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  align-items: center;
`;
export const Main = styled.main`
  width: 100%;
  height: 80vh;
  /* border:solid blue 2px; */
`;
export const MainHome = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #b9fbc0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  //.attrs({ type: 'number' })
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
