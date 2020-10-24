import styled from "styled-components";
import breakpoints from "../../helpers/styles/breakpoints";

const Button = styled.button`
  min-width: 7em;
  border: 1px solid #ef476f;
  border-radius: 4px;
  padding: 1em;
  background-color: #f8edeb;
  color: #ef476f;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: ${breakpoints.xs}) {
    padding: 0.7em;
  }
`;

export default Button;
