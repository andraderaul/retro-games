import styled from "styled-components";
import breakpoints from "../../helpers/styles/breakpoints";

export const Grid = styled.div`
  width: 208px;
  height: 208px;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-style: solid;
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

  -webkit-box-shadow: 14px 17px 16px -6px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 14px 17px 16px -6px rgba(0, 0, 0, 0.63);
  box-shadow: 14px 17px 16px -6px rgba(0, 0, 0, 0.63);

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

  -webkit-box-shadow: 0px -7px 75px 2px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px -7px 75px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0px -7px 75px 2px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.05, 1.05);
  }
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
