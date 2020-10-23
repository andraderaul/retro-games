import styled from "styled-components";
import breakpoints from "../../helpers/styles/breakpoints";

export const Grid = styled.div`
  width: 208px;
  height: 208px;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-style: solid;
  position: relative;
`;

export const Board = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 350px;
  width: 100%;
  height: 600px;
  padding: 4em 2em;
  background-color: #ef476f;
  border-radius: 30px;
  border: 4px solid #402f44;

  box-shadow: inset -20px 0 rgba(0, 0, 0, 0.1),
    inset 10px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px rgba(255, 255, 255, 0.5);

  @media (max-width: ${breakpoints.xl}) {
    width: 95%;
  }
`;

export const button = styled.span`
  position: absolute;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.6);
  background-color: #f2dc27;
  z-index: 2;
  cursor: pointer;

  &:hover {
    transform: scale(1.05, 1.05);
  }

  box-shadow: inset -3px 0 rgba(0, 0, 0, 0.1);
`;

export const ButtonB = styled(button)`
  width: 4em;
  height: 4em;
  bottom: 32%;
  right: 15%;
`;

export const ButtonA = styled(button)`
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};

  &:after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
    transform: ${({ rot }) => `rotate(${rot})`};
    position: absolute;
  }
`;

export const ButtonC = styled(button)`
  width: 1em;
  height: 1em;
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
`;

export const Positioned = styled.div`
  position: absolute;
  bottom: 15%;
  transform: rotate(-30deg);

  h3 {
    color: #f8edeb;
    font-size: 3em;
  }
  h3:first-child {
    transform: translate(-30%, 40%);
  }
  h3:last-child {
    transform: translate(20%, 10%);
  }
  span {
    color: #f8edeb;
    font-size: 1em;
  }
`;

export const GameOver = styled.div`
  width: 208px;
  height: 208px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;

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

export const Paused = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);

  animation: fadeIn ease 500ms;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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
