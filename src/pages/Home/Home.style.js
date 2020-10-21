import styled from "styled-components";

export const Container = styled.div`
  background-color: #3d405b;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.div`
  min-width: 300px;
  border: 1px solid #f8edeb;
  border-radius: 6px;
  padding: 1em;
  background-color: #ef476f;

  animation-name: zoom;
  animation-duration: 500ms;

  @keyframes zoom {
    0% {
      transform: scale(0, 0);
    }
    50% {
      transform: scale(1.3, 1.3);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  &:hover {
    transform: scale(1.1, 1.1);
    background-color: #f8edeb;
    border: 3px solid #ef476f;
    h1 {
      color: #ef476f;
    }
  }

  a {
    text-decoration: none;
  }
`;
