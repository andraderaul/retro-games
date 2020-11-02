import styled from "styled-components";
import breakpoints from "../../helpers/styles/breakpoints";

export const Container = styled.div`
  width: "100%";
  min-height: 100vh;
  padding-top: 3em;
  display: flex;
`;

export const Content = styled.div`
  width: 60%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.md}) {
    width: 80%;
  }
  @media (max-width: ${breakpoints.sm}) {
    width: 95%;
  }
`;

export const Box = styled.div`
  padding: 1em;
  margin: 1em;
  background-color: #3d4051;
  border: 4px solid #402f44;
  box-shadow: inset -20px 0 rgba(0, 0, 0, 0.1),
    inset 10px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px rgba(255, 255, 255, 0.5);

  &:hover {
    transform: scale(1.05);
    margin: 2em;
    padding: 2em;
  }
`;

export const Description = styled.span`
  color: #f8edeb;
  font-size: 1.5em;
  display: flex;
  text-align: justify;
  flex-direction: column;
`;
