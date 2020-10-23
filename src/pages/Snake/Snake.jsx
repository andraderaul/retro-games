import React, { useState, useEffect } from "react";

import { snakeArray } from "../../helpers/Utils/Utils";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";

import {
  Grid,
  Square,
  Box,
  GameOver,
  Board,
  ButtonB,
  ButtonA,
  Positioned,
} from "./Snake.style";

import useInterval from "../../hook/useInterval";

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

  const handleOnClickButtons = (newDirection) => {
    setDirection(newDirection);
  };

  const handlerRestart = () => {
    setIntervalTime(1000);
    setCurrentSnake([2, 1, 0]);
    setDirection(1);
    setScore(0);
    setIsRunning(true);
  };

  return (
    <Container>
      <Title>Snake!</Title>
      <Subtitle>
        Score: <span>{score}</span>
      </Subtitle>

      <Board>
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
          <GameOver>
            <Title>Game Over</Title>
            <Button onClick={handlerRestart}>Restart</Button>
          </GameOver>
        )}
        <ButtonA
          bottom="40%"
          left="20%"
          onClick={() => handleOnClickButtons(-width)}
        />
        <ButtonA
          bottom="35%"
          left="30%"
          onClick={() => handleOnClickButtons(1)}
        />
        <ButtonA
          bottom="30%"
          left="20%"
          onClick={() => handleOnClickButtons(+width)}
        />
        <ButtonA
          bottom="35%"
          left="10%"
          onClick={() => handleOnClickButtons(-1)}
        />
        <ButtonB onClick={!isRunning ? handlerRestart : null} />
        <Positioned>
          <h3>Brick</h3>
          <h3>Game</h3>
          <span>9999 in 1</span>
        </Positioned>
      </Board>
    </Container>
  );
};

export default Snake;
