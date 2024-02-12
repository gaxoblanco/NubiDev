import styled from "styled-components";

export const Btn = styled.button`
  width: ${({ wSize }) => wSize + "px" || "auto"};
  background: ${({ isGreen }) => (isGreen ? "#FFF;" : "#FF9D0B")};
  padding: 8px 20px;
  border-radius: 6px;
  font-weight: 500;
  font-size: ${({ fSize }) => fSize + "rem" || "0.8rem"};
`;
