import React, { useState } from "react";

import Button from "../../components/Button";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";

import { Grid, Square, Header, GameOver, Paused } from "./WhackAMole.style";

import useInterval from "../../hook/useInterval";
import mole from "../../assets/images/mole.png";
import { positionsArray, displayNumber } from "../../helpers/Utils/Utils";

const WhackAMole = () => {
  const [result, setResult] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isAlive, setIsAlive] = useState(true);
  const [timer, setTimer] = useState(60);

  const getRandomPosition = () =>
    Math.floor(Math.random() * positionsArray.length);

  const [randomPosition, setRandomPosition] = useState(
    positionsArray[getRandomPosition()]
  );

  const countDown = () => {
    if (timer === 0) {
      setIsAlive(false);
    }
    setTimer((currentTimer) => currentTimer - 1);
  };

  const moveMole = () => {
    if (timer === 0) {
      setIsAlive(false);
    }
    setRandomPosition(positionsArray[getRandomPosition()]);
  };

  const handlerRestart = () => {
    setIsAlive(true);
    setIsRunning(true);
    setTimer(60);
    setResult(0);
  };

  useInterval(
    () => {
      countDown();
    },
    isAlive && isRunning ? 1000 : null
  );

  useInterval(
    () => {
      moveMole();
    },
    isAlive && isRunning ? 700 : null
  );

  const handlerOnClick = (id) => {
    if (randomPosition === id) {
      setResult((oldResult) => oldResult + 1);
    }
  };

  const handlerPause = () => {
    setIsRunning((oldIsRunning) => !oldIsRunning);
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
        <div>
          <Button onClick={handlerPause}>Pause</Button>
          <Button onClick={handlerRestart}>Restart</Button>
        </div>
      </Header>

      {!isRunning && (
        <Paused onClick={handlerPause}>
          <Title>Paused</Title>
        </Paused>
      )}

      {isAlive ? (
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
