
import styled from "styled-components";

const primario = '#4ADE04';
const secundario = '#B70707';
const terciario = '#FFB800';

const gray = '#807F7F';

export const Parrafo = styled.p `
    font-size:${({is16})=> is16 ? '1.6rem' : '1.2rem'};
    font-weight: ${({isBold})=> isBold ? 'bold' : 'normal'};
    color: ${({isGray})=> isGray ? 'gray' : '#020202'};
    margin-right:${({marginR})=> marginR ? '4px' : '0px'};
    margin-left: ${({marginL})=> marginL ? '4px' : '0px'};
    text-align: ${({positionLeft})=> positionLeft ? 'left' : 'center'};
`;

export const Price = styled.p `
    font-size:${({is40})=> is40 ? '4rem' : '3rem'};
    font-weight: ${({isBold})=> isBold ? 'bold' : 'normal'};
    color: '#020202';
`;

export const OnOff = styled.div`
    display: ${({isOff})=> isOff ? 'none' : 'grid'};

`

export const Direction = styled.div`
    width: 90%;
    display: 'flex';
    flex-direction: ${({isRow})=> isRow ? 'row' : 'column'};
    background: red;
`
export  const Article = styled.article`
    width: 100%;
    display: "felx";
    margin : 0 5% ;
    
`

export const Icon = styled.svg`
    width: ${({is32})=>is32 ? '3.2rem' : '1.8rem'};
    height: auto;
    color: ${({isSecondaryColor})=>isSecondaryColor ? secundario : primario}
`
export const IconStar = styled.svg`
    width:1.8rem;
    height: auto;
    color: ${({isOn})=>isOn ? secundario : gray}
`

export const StateStock = styled.p`
    font-size: 1.2rem;
    color: ${({inStock})=> inStock ? '#A0A0A0' : secundario};
    margin-bottom: 0.4rem;
    font-weight: bold;
`