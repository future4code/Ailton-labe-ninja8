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
max-width:100%;
`

export const ContainerFooter = styled.div`
height: 10vh;
max-width:100%;
`

///estilização cards///
export const CardServico = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 360px;
min-height: 180px;
text-align: center;
font-size: 20px;
border-radius: 10px;
gap:10px;
background-color: #E4C1F9;

p{
    color:#3d348b;
    font-size: bold;
}
/* opacity: 80%; */
`

export const ButaoCard = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
margin-top: 10px;
`

export const CardTitulo = styled.div`
margin-bottom: 14px;
font-size: 28px;
color:${CorRosa};
opacity:100%;
`

export const ButaoCards = styled.button`
padding: 10px;
border: none;
border-radius: 8px;
background-color: #FF99C8;
color:#3d348b;
`

export const ImgCarrinho = styled.img`
height: 40px;
cursor:pointer;
`
export const ButtonLimpar = styled.button `
 padding: 10px;
  width: 150px; 
  border: none;
  border-radius: 8px;
  background-color: #cbf3f0 ;
  color: ${CorRosa};
`
export const CardItem = styled.div `
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
width: 500px;
height: 50px;
display: flex;
flex-direction: row;
align-items: center;
padding: 0 5px;
justify-content: space-between;
margin: 10px 0;
background-color: #a9d6e5;
border-radius: 5px;

`
export const ImgLixeira = styled.img`
height: 30px;
cursor:pointer;
`
export const ButaoRemover = styled.button `
padding: 10px;
width: 500px;
border: none;
border-radius: 8px;
background-color: #FF99C8;
color:#3a0ca3;
`

///estilização cards///