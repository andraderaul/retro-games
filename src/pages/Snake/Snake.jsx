import React, { useState, useEffect } from "react";
import { Container, Grid, Square, Box, GameOver } from "./Snake.style";

import useInterval from "../../hook/useInterval";
import { snakeArray } from "../../helpers/Utils/Utils";

const Snake = () => {
  const width = 10;
  let speed = 0.9;

  const getRandomPosition = () => Math.floor(Math.random() * snakeArray.length);

  const [intervalTime, setIntervalTime] = useState(1000);
  const [appleIndex, setAppleIndex] = useState(getRandomPosition());
  const [currentSnake, setCurrentSnake] = useState([2, 1, 0]);
  const [direction, setDirection] = useState(1);
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const moveOutComes = () => {
    if (
      (currentSnake[0] + width >= width * width && direction === width) ||
      (currentSnake[0] % width === width - 1 && direction === 1) ||
      (currentSnake[0] % width === 0 && direction === -1) ||
      (currentSnake[0] - width < 0 && direction === -width) ||
      currentSnake.includes(currentSnake[0] + direction)
    ) {
      console.log("endgame");
      setIsRunning(false);
    }
    let tail;
    setCurrentSnake((prevSnake) => {
      tail = prevSnake[prevSnake.length - 1];
      return [
        prevSnake[0] + direction,
        ...prevSnake.slice(0, prevSnake.length - 1),
      ];
    });

    if (currentSnake.includes(appleIndex)) {
      setAppleIndex(getRandomPosition());
      setCurrentSnake((prevSnake) => [...prevSnake, tail]);
      setScore((oldScore) => oldScore + 1);
      setIntervalTime((oldInterval) => oldInterval * speed);
    }
  };

  useInterval(
    () => {
      moveOutComes();
    },
    isRunning ? intervalTime : null
  );

  useEffect(() => {
    const control = (e) => {
      if (e.keyCode === 39) {
        setDirection(1);
      } else if (e.keyCode === 38) {
        setDirection(-width);
      } else if (e.keyCode === 37) {
        setDirection(-1);
      } else if (e.keyCode === 40) {
        setDirection(+width);
      }
    };
    document.addEventListener("keydown", control);
  }, [direction]);

  return (
    <Container>
      {score}
      {isRunning ? (
        <Grid>
          {snakeArray.map((snake, index) => {
            return (
              <Square>
                <Box
                  type={
                    currentSnake.includes(index)
                      ? "snake"
                      : appleIndex === index
                      ? "apple"
                      : ""
                  }
                />
              </Square>
            );
          })}
        </Grid>
      ) : (
        <GameOver>Game Over</GameOver>
      )}
    </Container>
  );
};

export default Snake;
