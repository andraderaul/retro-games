import React, { useState, useEffect } from "react";

import {
  connectFourArray,
  connectFourWinningArrays,
} from "../../helpers/MemoryGame/Utils";
import { Grid, Square, Circle } from "./ConnectFour.style";

const ConnectFour = () => {
  const [squares, setSquares] = useState(connectFourArray);
  const [currentPlayer, setCurrentPlayer] = useState(1);

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
        console.log("Player 1 WINS");
      } else if (
        square1.player === 2 &&
        square2.player === 2 &&
        square3.player === 2 &&
        square4.player === 2
      ) {
        console.log("Player 2 WINS");
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

  const handlerOnClick = (index) => {
    if (squares[index + 7] && squares[index + 7].value === "taken") {
      if (currentPlayer === 1) {
        paintSquare(1, 2, index);
      } else if (currentPlayer === 2) {
        paintSquare(2, 1, index);
      }
    } else {
      console.log("cant go here");
    }
  };

  return (
    <>
      <span>Player {currentPlayer}</span>
      <Grid>
        {squares.map((square, index) => (
          <Square key={index} onClick={() => handlerOnClick(index)}>
            <Circle player={square.player} />
          </Square>
        ))}
      </Grid>
    </>
  );
};

export default ConnectFour;
