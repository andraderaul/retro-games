import styled from "styled-components";

export const Grid = styled.div`
  border: 1px solid;
  display: flex;
  flex-wrap: wrap;
  height: 120px;
  width: 142px;
  overflow: hidden;
`;

export const Square = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid;
`;
export const Circle = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-color: ${({ player }) =>
    player === 1 ? "red" : player === 2 ? "blue" : "none"};
`;
