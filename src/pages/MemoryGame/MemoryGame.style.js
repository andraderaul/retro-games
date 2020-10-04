import styled from "styled-components";

export const Container = styled.div`
  background-color: #a4a2a2;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 60%;
  max-width: 400px;
  min-height: 300px;
  border: 3px solid #2c2b2b;
  background-color: #2c2b2b;
  display: flex;
  flex-wrap: wrap;
`;

export const Score = styled.h3`
  span {
  }
`;

export const Attempts = styled.h4``;

export const Title = styled.h1``;

export const Image = styled.img`
  cursor: pointer;
  max-width: 100%;
  height: auto;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
