import React, { useState } from "react";
import {
  Grid,
  Square,
  Container,
  Header,
  Title,
  Subtitle,
  Button,
  GameOver,
} from "./WhackAMole.style";

import useInterval from "../../hook/useInterval";
import mole from "../../assets/images/mole.png";
import { positionsArray, displayNumber } from "../../helpers/MemoryGame/Utils";

const WhackAMole = () => {
  const [result, setResult] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [timer, setTimer] = useState(60);

  const getRandomPosition = () =>
    Math.floor(Math.random() * positionsArray.length);

  const [randomPosition, setRandomPosition] = useState(
    positionsArray[getRandomPosition()]
  );

  const countDown = () => {
    if (timer === 0) {
      setIsRunning(false);
    }
    setTimer((currentTimer) => currentTimer - 1);
  };

  const moveMole = () => {
    if (timer === 0) {
      setIsRunning(false);
    }
    setRandomPosition(positionsArray[getRandomPosition()]);
  };

  const handlerRestart = () => {
    setIsRunning(true);
    setTimer(60);
    setResult(0);
  };

  useInterval(
    () => {
      countDown();
    },
    isRunning ? 1000 : null
  );

  useInterval(
    () => {
      moveMole();
    },
    isRunning ? 500 : null
  );

  const handlerOnClick = (id) => {
    if (randomPosition === id) {
      setResult((oldResult) => oldResult + 1);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Whack a mole!</Title>
        <div>
          <Subtitle>
            Seconds left: <span>{displayNumber(timer)}</span>
          </Subtitle>
          <Subtitle>
            Your score: <span>{displayNumber(result)}</span>
          </Subtitle>
        </div>
        <Button onClick={handlerRestart}>Restart</Button>
      </Header>

      {isRunning ? (
        <Grid>
          {positionsArray.map((square) => {
            return (
              <Square
                key={square}
                mole={randomPosition === square}
                onClick={() => handlerOnClick(square)}
              >
                {randomPosition === square && <img src={mole} alt="mole" />}
              </Square>
            );
          })}
        </Grid>
      ) : (
        <GameOver>
          <Title>Gamer Over</Title>
        </GameOver>
      )}
    </Container>
  );
};

export default WhackAMole;
