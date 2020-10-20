import styled from "styled-components";

export const Container = styled.div`
  background-color: #3d405b;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  width: 208px;
  height: 208px;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-style: solid;
`;

export const GameOver = styled.div`
  width: 208px;
  height: 208px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-style: solid;
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
