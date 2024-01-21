import styled from "styled-components";

export const Btn = styled.button `
    width: ${({isBig})=> isBig ? '100%' : 'auto'};
    background: ${({isGreen})=> isGreen ? '#4ADE04' : '#FF9D0B'};
    padding: 0px 8px 4px 8px;
    border-radius: 6px;
    font-weight: 600;
    color: white;
    font-size: ${({is22})=> is22 ? '12px' : '16px'};
`;