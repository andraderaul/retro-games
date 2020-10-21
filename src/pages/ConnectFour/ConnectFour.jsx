import React, { useState, useEffect } from "react";

import {
  connectFourArray,
  connectFourWinningArrays,
} from "../../helpers/Utils/Utils";

import Button from "../../components/Button";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";

import { Grid, Square, Circle, GameOver } from "./ConnectFour.style";

const ConnectFour = () => {
  const [squares, setSquares] = useState(connectFourArray);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    connectFourWinningArrays.forEach((item, index, array) => {
      const square1 = squares[array[index][0]];
      const square2 = squares[array[index][1]];
      const square3 = squares[array[index][2]];
      const square4 = squares[array[index][3]];

      if (
        square1.player === 1 &&
        square2.player === 1 &&
        square3.player === 1 &&
        square4.player === 1
      ) {
        setWinner("Player 1 WINS");
      } else if (
        square1.player === 2 &&
        square2.player === 2 &&
        square3.player === 2 &&
        square4.player === 2
      ) {
        setWinner("Player 2 WINS");
      }
    });
    return () => {};
  }, [squares]);

  const paintSquare = (currentP, nextP, index) => {
    setSquares((oldSquares) =>
      oldSquares.map((square, idx, array) => {
        if (index === idx && array[idx].player === "") {
          setCurrentPlayer(nextP);
          return {
            player: currentP,
            value: "taken",
          };
        }
        return square;
      })
    );
  };

  const handlerRestart = () => {
    setWinner("");
    setCurrentPlayer((oldPlayer) =>
      oldPlayer === 1 ? oldPlayer + 1 : oldPlayer
    );
    setSquares(connectFourArray);
  };

  const handlerOnClick = (index) => {
    if (squares[index + 7] && squares[index + 7].value === "taken") {
      if (currentPlayer === 1) {
        paintSquare(1, 2, index);
      } else if (currentPlayer === 2) {
        paintSquare(2, 1, index);
      }
    } else {
      alert("cant go here");
    }
  };

  return (
    <Container>
      {!winner ? (
        <>
          <Title>Connect Four</Title>
          <Subtitle>
            Turn <span>player {currentPlayer}</span>
          </Subtitle>
          <Grid>
            {squares.map((square, index) => (
              <Square key={index} onClick={() => handlerOnClick(index)}>
                <Circle player={square.player} />
              </Square>
            ))}
          </Grid>
        </>
      ) : (
        <GameOver>
          <Title>{winner}</Title>
          <Button onClick={handlerRestart}>Restart</Button>
        </GameOver>
      )}
    </Container>
  );
};

export default ConnectFour;
