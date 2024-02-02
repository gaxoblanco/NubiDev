
import styled from "styled-components";

const primario = '#4ADE04';
const secundario = '#B70707';
const terciario = '#FFB800';

const gray = '#807F7F';

export const Parrafo = styled.p `
    font-size:${({is20})=> is20 ? '1rem' : '0.8rem'};
    font-weight: ${({isBold})=> isBold ? 'bold' : 'normal'};
    color: ${({isGray})=> isGray ? 'gray' : '#020202'};
    margin-right:${({marginR})=> marginR ? '4px' : '0px'};
    margin-left: ${({marginL})=> marginL ? '4px' : '0px'};
    text-align: ${({positionLeft})=> positionLeft ? 'left' : 'center'};

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 4;

    line-height: 1.2;
    margin-bottom: 1rem;
`;

export const Price = styled.p `
    font-size:${({is40})=> is40 ? '2rem' : '1.5rem'};
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
    width: ${({size})=>size ? (size + 'rem') : '1.8rem'};
    height: ${({size})=>size ? (size + 'rem') : '1.8rem'};
    color: ${({isSecondaryColor})=>isSecondaryColor ? secundario : primario}
`
export const IconStar = styled.svg`
    width:1.8rem;
    height: auto;
    color: ${({isOn})=>isOn ? secundario : gray}
`

export const StateStock = styled.p`
    font-size: 0.8rem;
    color: ${({inStock})=> inStock ? '#A0A0A0' : secundario};
    margin-bottom: 0.4rem;
    font-weight: bold;
`