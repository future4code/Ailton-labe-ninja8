
import styled from "styled-components";
import { CorRosa, CorVerde, CorAmarelo, AzulClaro, AzulEscuro } from "../constants/cores";




export const ContainerPage = styled.div`
width:100%;
height:100%;
`

export const Header = styled.header`
width:100%;
height:10vh;
/* border:solid black 2px; */

`
export const ImagemHeader = styled.img`
height:60%;
/* width:80px; */
margin-top:17px;
margin-left:10px;
`


export const Main =styled.main`
width:100%;
height:80vh;
/* border:solid blue 2px; */
`
export const MainHome =styled.main`
width:100%;
height:100vh;
background-color:#b9fbc0;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
 
export const Servico = styled.img`
margin-top:220px;
height: 200px;
width:200px;
border-radius: 10px;
transition: 0.7s;
:hover{
    border-radius:100px;
    transition: 0.7s;
}
`

export const ButtonServ = styled.button `
margin-left: 20px;
width: 185px;
height: 115px;
border: none;
border-radius: 5px;
font-weight: bold;
font-size: 18px;
background: -webkit-linear-gradient(360deg,#EF476F,#FFD166,#06D6A0,#118AB2,#073B4C);
p{
    color:white;
text-shadow: 1.5px 1.5px 2px black;
  }
`

export const HomeButton = styled.button `
background-color: ${CorRosa};
width: 60px;
height: 25px;
margin-left: 5px;
border: none;
border-radius: 5px;
`
export const ServButton = styled.button `
background-color: ${CorVerde};
width: 60px;
height: 25px;
margin-left: 5px;
border: none;
border-radius: 5px;
`
export const InputServ = styled.input `
background-color: ${CorAmarelo};
width: 200px;
height: 30px;
margin: 5px;
border: none;
border-radius: 5px;
`
export const InputServDois = styled.input `
background-color: ${CorVerde};
width: 200px;
height: 30px;
margin: 5px;
border: none;
border-radius: 5px;
`
export const InputServTres = styled.input `
background-color: ${AzulClaro};
width: 200px;
height: 30px;
margin: 5px;
border: none;
border-radius: 5px;
`