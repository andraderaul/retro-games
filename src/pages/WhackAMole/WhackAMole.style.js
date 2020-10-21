import styled, { css } from "styled-components";
import breakpoints from "../../helpers/styles/breakpoints";

export const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  width: 650px;
  height: 650px;
  padding: 1em;
  background-color: #f2cc8f;

  -webkit-box-shadow: 14px 17px 16px -6px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 14px 17px 16px -6px rgba(0, 0, 0, 0.63);
  box-shadow: 14px 17px 16px -6px rgba(0, 0, 0, 0.63);

  @media (max-width: 540px) {
    width: 100%;
    height: auto;
  }
`;

export const GameOver = styled.div`
  width: 650px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.xs}) {
    width: 100%;
    height: auto;
  }
`;

export const Square = styled.div`
  width: 173px;
  height: 173px;
  margin: 1em;
  border-radius: 50%;
  border-style: solid;
  border-color: #81b29a;
  background-color: #e07a5f;

  @media (max-width: ${breakpoints.xs}) {
    width: 110px;
    height: 110px;
    margin: 0.3em;
  }

  @media (max-width: 375px) {
    width: 86px;
    height: 86px;
    margin: 0.3em;
  }

  ${({ mole }) =>
    mole &&
    css`
      img {
        max-width: 100%;
        height: auto;
        cursor: pointer;
        border-radius: 50%;

        animation-name: whack;
        animation-duration: 500ms;

        @keyframes whack {
            0% {
                transform: scale(0, 0);
            }
            100% {
                transform: scale(1.1, 1.1);
            }
    `}
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.7rem;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: ${breakpoints.xs}) {
      flex-direction: column;
    }
  }
`;
