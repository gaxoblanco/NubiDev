
import styled from "styled-components";

export const Parrafo = styled.p `
    font-size:${({is16})=> is16 ? '16px' : '12px'};
    font-weight: ${({isBold})=> isBold ? 'bold' : 'normal'};
    color: ${({isGray})=> isGray ? '#807F7F' : '#020202'};
    margin-right: 4px;
    margin-left: 4px;
`;

export const Price = styled.p `
    font-size:${({is40})=> is40 ? '40px' : '30px'};
    font-weight: ${({isBold})=> isBold ? 'bold' : 'normal'};
    color: '#020202';
`;

export const OnOff = styled.div`
    display: ${({isOff})=> isOff ? 'none' : 'flex'};
`

export const Direction = styled.div`
    width: 90%;
    display: 'flex';
    flex-direction: ${({isRow})=> isRow ? 'row' : 'column'};
    background: red;
`
