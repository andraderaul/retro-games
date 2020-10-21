import styled from "styled-components";

export const Grid = styled.div`
  width: 208px;
  height: 208px;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-style: solid;
`;

export const GameOver = styled.div`
  width: 408px;
  height: 208px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Square = styled.div`
  width: 20.2px;
  height: 20.2px;
`;

export const Box = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ type }) =>
    type === "snake" ? "blue" : type === "apple" ? "purple" : "none"};
`;
