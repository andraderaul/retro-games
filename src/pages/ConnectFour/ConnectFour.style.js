import styled from "styled-components";
import breakpoints from "../../helpers/styles/breakpoints";

export const Grid = styled.div`
  background-color: #d6bbc0;
  border: 3px solid;
  display: flex;
  flex-wrap: wrap;
  width: 654.3px;
  height: 554px;
  overflow: hidden;

  -webkit-box-shadow: 14px 17px 16px -6px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 14px 17px 16px -6px rgba(0, 0, 0, 0.63);
  box-shadow: 14px 17px 16px -6px rgba(0, 0, 0, 0.63);

  @media (max-width: ${breakpoints.xs}) {
    width: 100%;
    height: 366px;
  }
`;

export const GameOver = styled.div`
  width: 654.3px;
  height: 554px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.xs}) {
    width: 100%;
    height: auto;
  }
`;

export const Square = styled.div`
  height: 91.5px;
  width: 92.6px;
  border: 1px solid;
  cursor: pointer;

  @media (max-width: ${breakpoints.xs}) {
    width: 59.8px;
    height: 59.8px;
  }
`;
export const Circle = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: ${({ player }) =>
    player === 1 ? "#e63946" : player === 2 ? "#457b9d" : "none"};
`;
