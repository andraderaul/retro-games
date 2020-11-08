import React, { useState, useEffect, useCallback } from "react";
import {
  spaceInvadersArray,
  alienInvadersArray,
} from "../../helpers/Utils/Utils";
import useInterval from "../../hook/useInterval";

import Container from "../../components/Container";
import {
  Grid,
  Square,
  Board,
  PartA,
  PartB,
  GameOver,
} from "./SpaceInvaders.style";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import Button from "../../components/Button";

const SpaceInvaders = () => {
  const width = 15;

  const [currentShooterIndex, setCurrentShooterIndex] = useState(202);
  const [direction, setDirection] = useState(1);
  const [alienInvaders, setAlienInvaders] = useState(alienInvadersArray);
  const [currentLaserIndex, setCurrentLaserIndex] = useState(null);
  const [boom, setBoom] = useState(null);
  const [isRunning, setIsRunning] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const overflow = alienInvaders.some(
      (invader) => invader > spaceInvadersArray.length - (width - 1)
    );

    if (alienInvaders.includes(currentShooterIndex) || overflow) {
      console.log("game over");
      setIsRunning(false);
    }

    if (alienInvaders.length === 0) {
      console.log("You win");
      setIsRunning(false);
    }
  }, [alienInvaders, currentShooterIndex, width]);

  const moveShooter = useCallback(
    (e) => {
      if (e.keyCode === 37) {
        setCurrentShooterIndex((current) =>
          current % width !== 0 ? current - 1 : current
        );
      }
      if (e.keyCode === 39) {
        setCurrentShooterIndex((current) =>
          current % width < width - 1 ? current + 1 : current
        );
      }
    },
    [width]
  );

  useEffect(() => {
    document.addEventListener("keydown", moveShooter);

    return () => {
      document.removeEventListener("keydown", moveShooter);
    };
  }, [moveShooter]);

  const shoot = useCallback(
    (e) => {
      let laserId;
      let localLaserIndex = currentShooterIndex;
      setCurrentLaserIndex(currentShooterIndex);

      const moveLaser = () => {
        localLaserIndex -= width;
        setCurrentLaserIndex(localLaserIndex);
        if (alienInvaders.includes(localLaserIndex)) {
          setAlienInvaders((aliens) =>
            aliens.filter((alien) => alien !== localLaserIndex)
          );
          setBoom(localLaserIndex);
          setTimeout(() => setBoom(null), 250);
          clearInterval(laserId);

          setScore((oldScore) => oldScore + 1);
        }
        if (localLaserIndex < width) {
          clearInterval(laserId);
          setTimeout(() => setCurrentLaserIndex(null), 100);
        }
      };

      switch (e.keyCode) {
        case 32:
          laserId = setInterval(moveLaser, 100);
          break;

        default:
          break;
      }
    },
    [alienInvaders, currentShooterIndex, width]
  );

  useEffect(() => {
    document.addEventListener("keyup", shoot);

    return () => {
      document.removeEventListener("keyup", shoot);
    };
  }, [shoot]);

  const moveInvaders = () => {
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge =
      alienInvaders[alienInvaders.length - 1] % width === width - 1;
    let localDirection = direction;
    if ((leftEdge && direction === -1) || (rightEdge && direction === 1)) {
      setDirection(width);
      localDirection = width;
    } else if (direction === width) {
      if (leftEdge) {
        setDirection(1);
        localDirection = 1;
      } else {
        setDirection(-1);
        localDirection = -1;
      }
    }
    setAlienInvaders((aliens) => aliens.map((alien) => alien + localDirection));
  };

  useInterval(
    () => {
      moveInvaders();
    },
    isRunning ? 500 : null
  );

  const handlerRestart = () => {
    setIsRunning(true);
    setCurrentShooterIndex(202);
    setDirection(1);
    setAlienInvaders(alienInvadersArray);
    setCurrentLaserIndex(null);
    setScore(0);
  };

  const squareType = (index) => {
    return alienInvaders.includes(index)
      ? "invader"
      : currentShooterIndex === index
      ? "shooter"
      : currentLaserIndex === index
      ? "laser"
      : boom === index
      ? "boom"
      : "";
  };

  return (
    <Container>
      <Title>Space Invaders</Title>
      <Subtitle>
        score : <span>{score}</span>
      </Subtitle>
      <Board>
        <PartA />
        <PartB />
        {isRunning ? (
          <Grid>
            {spaceInvadersArray.map((item, index) => (
              <Square key={index} type={squareType(index)} />
            ))}
          </Grid>
        ) : (
          <GameOver>
            <Title>Game Over</Title>
            <Button onClick={handlerRestart}>Restart</Button>
          </GameOver>
        )}
      </Board>
    </Container>
  );
};

export default SpaceInvaders;
