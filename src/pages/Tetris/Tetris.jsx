import React, { useState } from "react";

import { tetrisArray, theTetrominoes } from "../../helpers/Utils/Utils";

import Container from "../../components/Container";
import { Grid, Square } from "./Tetris.styles";

const Tetris = () => {
  const width = 10;
  const colors = ["orange", "red", "purple", "green", "blue"];

  const [currentPosition, setCurrentPosition] = useState(4);
  const [currentRotation, setCurrentRotation] = useState(0);

  return (
    <Container>
      <Grid>
        {tetrisArray.map((tetris) => {
          return <Square />;
        })}
      </Grid>
    </Container>
  );
};

export default Tetris;
