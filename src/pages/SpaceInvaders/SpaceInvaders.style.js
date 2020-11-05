import styled from "styled-components";
import breakpoints from "../../helpers/styles/breakpoints";

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: solid 1px;
  width: 310px;
  height: 300px;
  background-color: black;

  animation: open ease 300ms;
  @keyframes open {
    0% {
      width: 0%;
      display: none;
    }
    100% {
      width: 310px;
    }
  }
`;

export const Square = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ type }) =>
    type === "shooter"
      ? "blue"
      : type === "invader"
      ? "purple"
      : type === "laser"
      ? "orange"
      : type === "boom"
      ? "red"
      : "none"};
  border-radius: ${({ type }) => (type === "invader" ? "10px" : "none")};
`;

export const Board = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 650px;
  width: 100%;
  background-color: #101319;
  height: 330px;
  padding: 0px 0em;
  border: 4px solid #402f44;
  border-radius: 50px;

  box-shadow: inset 20px 0 rgba(0, 0, 0, 0.1),
    inset 10px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px rgba(255, 255, 255, 0.5);

  animation: open ease 2s;
  @keyframes open {
    0% {
      width: 330px;
      border-radius: 50px;
      display: none;
    }
    100% {
      border-radius: 50px;
      width: 650px;
    }
  }
`;

export const PartA = styled.div`
  position: absolute;
  left: 0;
  background-color: #118fd9;
  width: 166px;
  height: 320px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  box-shadow: inset -20px 0 rgba(0, 0, 0, 0.1),
    inset 10px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px rgba(255, 255, 255, 0.5);

  @media (max-width: ${breakpoints.xs}) {
    display: none;
  }
`;

export const PartB = styled.div`
  position: absolute;
  background-color: #de2a3d;
  right: 0;
  width: 166px;
  height: 320px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  box-shadow: inset -20px 0 rgba(0, 0, 0, 0.1),
    inset 10px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px rgba(255, 255, 255, 0.5);

  transform: rotate(180deg);

  @media (max-width: ${breakpoints.xs}) {
    display: none;
  }
`;

export const GameOver = styled.div`
  width: 310px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: fadeIn ease 600ms;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
