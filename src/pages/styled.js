import { style } from "@mui/system";
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
height:80%;
/* width:80px; */
margin-top:6px;
margin-left:10px;
`


export const HeaderHome = styled.div`
width:100%;
height:100%;
 background-color:${CorRosa}; 
`

export const Main =styled.main`
width:100%;
height:80vh;
/* border:solid blue 2px; */
`
export const MainHome =styled.main`
width:100%;
height:90vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
/* border:solid blue 2px; */
`
export const ButtonAdd = styled.button `
background-color: ${CorVerde};
margin-right: 20px;
width: 150px;
height: 100px;
border: none;
border-radius: 5px;
font-weight: bold;
font-size: 15px;
color: ${AzulEscuro};
`
export const ButtonServ = styled.button `
background-color: ${AzulClaro};
margin-left: 20px;
width: 150px;
height: 100px;
border: none;
border-radius: 5px;
font-weight: bold;
font-size: 15px;
color: ${CorAmarelo};
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