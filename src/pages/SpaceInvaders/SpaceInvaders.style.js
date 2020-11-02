import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: solid 1px;
  width: 310px;
  height: 300px;
  background-color: white;
`;

export const Square = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ type }) =>
    type === "shooter"
      ? "blue"
      : type === "invader"
      ? "purple"
      : type === "laser"
      ? "orange"
      : type === "boom"
      ? "red"
      : "none"};
  border-radius: ${({ type }) => (type === "invader" ? "10px" : "none")};
`;
