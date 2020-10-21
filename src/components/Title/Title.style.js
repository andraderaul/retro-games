import styled from "styled-components";
import breakpoints from "../../helpers/styles/breakpoints";

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #f8edeb;
  margin-bottom: 0.7rem;

  @media (max-width: ${breakpoints.xs}) {
    font-size: 2rem;
  }
`;

export default Title;
