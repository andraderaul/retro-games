import styled from "styled-components";
import breakpoints from "../../helpers/styles/breakpoints";

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #f8edeb;
  margin-bottom: 0.7rem;
  span {
    color: #ef476f;
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }
`;

export default Subtitle;
