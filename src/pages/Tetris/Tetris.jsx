import React, { useState, useEffect, useCallback } from "react";

import {
  tetrisArray,
  theTetrominoes,
  colors,
  getRandomItem,
} from "../../helpers/Utils/Utils";

import Container from "../../components/Container";
import { Grid, Square } from "./Tetris.styles";

const Tetris = () => {
  const width = 10;

  const [currentPosition, setCurrentPosition] = useState(4);
  const [currentRotation, setCurrentRotation] = useState(0);

  const [current, setCurrent] = useState(getRandomItem(theTetrominoes));

  const freeze = useCallback(() => {
    const isNotAtBottomEdge = current.some(
      (index) => currentPosition + index + width > tetrisArray.length - 10
    );
    if (isNotAtBottomEdge) {
      console.log("freeze");
      setCurrent(getRandomItem(theTetrominoes));
      setCurrentPosition(4);
    }
  }, [current, currentPosition]);

  const moveDown = useCallback(() => {
    setCurrentPosition((oldPosition) => oldPosition + width);
    freeze();
  }, [freeze]);

  const moveLeft = useCallback(() => {
    const isAtLeftEdge = current.some(
      (index) => (currentPosition + index) % width === 0
    );
    if (!isAtLeftEdge) {
      setCurrentPosition((oldPosition) => oldPosition - 1);
    }
    // const isNotAtBottomEdge = current.some(
    //   (index) => currentPosition + index > tetrisArray.length - 10
    // );
    // if (isNotAtBottomEdge) {
    //   setCurrentPosition((oldPosition) => oldPosition + 1);
    // }
  }, [current, currentPosition, width]);

  const moveRight = useCallback(() => {
    const isAtRightEdge = current.some(
      (index) => (currentPosition + index) % width === width - 1
    );
    if (!isAtRightEdge) {
      setCurrentPosition((oldPosition) => oldPosition + 1);
    }
    // const isNotAtBottomEdge = current.some(
    //   (index) => currentPosition + index > tetrisArray.length - 10
    // );
    // if (isNotAtBottomEdge) {
    //   setCurrentPosition((oldPosition) => oldPosition - 1);
    // }
  }, [current, currentPosition, width]);

  const rotate = useCallback(() => {
    const aux = currentRotation + 1;
    console.log("aux", aux);
    console.log();
    if (aux < current[aux - 1].length) {
      setCurrentRotation((oldRotation) => oldRotation + 1);
    }
    if (aux >= current[aux - 1].length) {
      setCurrentRotation(0);
    }
  }, [current, currentRotation]);

  useEffect(() => {
    const control = (e) => {
      if (e.keyCode === 37) {
        moveLeft();
      } else if (e.keyCode === 38) {
        rotate();
      } else if (e.keyCode === 39) {
        moveRight();
      } else if (e.keyCode === 40) {
        moveDown();
      }
    };
    document.addEventListener("keydown", control);

    return () => {
      document.removeEventListener("keydown", control);
    };
  }, [moveDown, moveLeft, moveRight, rotate]);

  const Board = () => {
    const squares = tetrisArray.map((tetris) => <Square />);
    const color = getRandomItem(colors);
    current[currentRotation].forEach((index) => {
      squares[currentPosition + index] = <Square color={color} />;
    });

    return squares;
  };

  return (
    <Container>
      <Grid>
        <Board />
      </Grid>
    </Container>
  );
};

export default Tetris;
