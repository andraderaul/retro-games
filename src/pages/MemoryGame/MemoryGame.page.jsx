import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  Score,
  Image,
  Title,
  Attempts,
} from "./MemoryGame.style";

import blank from "../../assets/images/blank.png";
import white from "../../assets/images/white.png";
import { cardArray } from "../../helpers/MemoryGame/Utils";

const MemoryGame = () => {
  const [cardsChosen, setCardsChosen] = useState([]);
  const [cardsChosenId, setCardsChosenId] = useState([]);
  const [cardsWonId, setCardsWonId] = useState([]);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const checkForMatch = () => {
      const [cardA, cardB] = cardsChosen;
      const [idA, idB] = cardsChosenId;

      if (idA === idB) {
        console.log("You have clicked the same image!");
        setAttempts((oldAttempts) => oldAttempts + 1);
      } else if (cardA.name === cardB.name) {
        console.log("You found a match");
        setCardsWonId((oldCardsWonId) => [...oldCardsWonId, ...cardsChosenId]);
      } else {
        console.log("Sorry, try again");
        setAttempts((oldAttempts) => oldAttempts + 1);
      }
      setCardsChosen([]);
      setCardsChosenId([]);
    };

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }

    return () => {};
  }, [cardsChosen, cardsChosenId]);

  const renderBoard = () => {
    return cardArray.map((data, index) => {
      return (
        <Image
          key={index}
          src={
            cardsChosenId.includes(index)
              ? data.img
              : cardsWonId.includes(index)
              ? white
              : blank
          }
          onClick={cardsWonId.includes(index) ? null : () => flipCard(index)}
        />
      );
    });
  };

  const flipCard = (index) => {
    setCardsChosenId((oldChosenId) => [...oldChosenId, index]);
    setCardsChosen((oldCardsChosen) => [...oldCardsChosen, cardArray[index]]);
  };

  const renderScore = () => {
    return cardsWonId.length === cardArray.length ? (
      <Score>Congratulations! You found them all!</Score>
    ) : (
      <Score>
        Score: <span>{cardsWonId.length / 2}</span>
      </Score>
    );
  };

  const renderAttempts = () => {
    return (
      <Attempts>
        <span>Attempts: {attempts}</span>
      </Attempts>
    );
  };

  return (
    <Container>
      <Title>Memory Game</Title>
      {renderScore()}
      {renderAttempts()}
      <Content>{renderBoard()}</Content>
    </Container>
  );
};

export default MemoryGame;
