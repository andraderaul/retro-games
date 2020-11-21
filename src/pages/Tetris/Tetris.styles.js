import styled from "styled-components";

export const Grid = styled.div`
  width: 200px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  background-color: yellow;
`;

export const Square = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${({ color }) => (color ? color : "none")};
`;
