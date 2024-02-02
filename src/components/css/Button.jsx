import styled from "styled-components";

export const Btn = styled.button `
    width: ${({wSize})=> (wSize + 'px') || 'auto'};
    background: ${({isGreen})=> isGreen ? '#4ADE04' : '#FF9D0B'};
    padding: 0px 8px 4px 8px;
    border-radius: 6px;
    font-weight: 600;
    color: white;
    font-size: ${({fSize})=> (fSize + 'px') || '16px'};
`;