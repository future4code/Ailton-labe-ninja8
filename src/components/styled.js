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
    color:#3a0ca3;
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
color:#3a0ca3;
`

export const ImgCarrinho = styled.img`
height: 40px;
`

///estilização cards///