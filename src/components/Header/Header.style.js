import styled from "styled-components";
import breakpoints from "../../helpers/styles/breakpoints";

export const WrapperHeader = styled.header`
  position: absolute;
  width: 100%;
  top: 0;
  padding: 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  nav {
    width: 20%;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
    }

    span {
      font-size: 1.5em;
      color: #f8edeb;
      padding: 0.5em;

      &:hover {
        color: #ffffff;
        text-decoration: underline;
      }
    }
  }

  @media (max-width: ${breakpoints.xs}) {
    display: none;
  }
`;
