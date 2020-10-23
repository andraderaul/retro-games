import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import TitleComponent from "../../components/Title";

import {
  Container,
  Content,
  Box,
  Score,
  Image,
  Title,
  Attempts,
  ButtonA,
  ButtonB,
  ArrowA,
  ArrowB,
  ArrowC,
  WrapperDisplay,
  GameOver,
} from "./MemoryGame.style";

import blank from "../../assets/images/blank.png";
import white from "../../assets/images/white.png";
import { cardArray } from "../../helpers/Utils/Utils";

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

  const handlerRestart = () => {
    setCardsChosen([]);
    setCardsChosenId([]);
    setCardsWonId([]);
    setAttempts(0);
  };

  const renderGameOver = () => {
    return (
      <GameOver>
        <TitleComponent>Congratulations! You found them all!</TitleComponent>
        <Button onClick={handlerRestart}>Restart</Button>
      </GameOver>
    );
  };

  const flipCard = (index) => {
    setCardsChosenId((oldChosenId) => [...oldChosenId, index]);
    setCardsChosen((oldCardsChosen) => [...oldCardsChosen, cardArray[index]]);
  };

  const Display = () => (
    <WrapperDisplay>
      <Score>
        <h3>Score</h3> <span>{cardsWonId.length / 2}</span>
      </Score>
      <Title>
        <h1>Memory Game</h1>
      </Title>
      <Attempts>
        <h3>Attempts</h3> <span>{attempts}</span>
      </Attempts>
    </WrapperDisplay>
  );

  return (
    <Container>
      <Display />
      <Box>
        <ArrowA />
        <ArrowB />
        <ArrowC />
        <Content>
          {cardsWonId.length !== cardArray.length
            ? renderBoard()
            : renderGameOver()}
        </Content>
        <ButtonA>A</ButtonA>
        <ButtonB>B</ButtonB>
      </Box>
    </Container>
  );
};

export default MemoryGame;
