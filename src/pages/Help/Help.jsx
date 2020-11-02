import React from "react";

import { Container, Content, Description, Box } from "./Help.style";

import Title from "../../components/Title";

const Help = () => {
  return (
    <Container>
      <Content>
        <Box>
          <Title>Memory Game</Title>
          <Description>
            Memory Game, also known as the Concentration card game or Matching
            Game, is a simple card game where you need to match pairs by turn
            over 2 cards at a time. There are so many versions of it it is hard
            to in down it's exact origin. There are claims that the famuos
            writer of Huckleberry Finn, Mark Twain invented his own version. I
            googled it and whatever it is, it looks more like a way of trying to
            figure out how much tax you owe rather than match cards.
            <strong>To play you must click with the left mouse button.</strong>
          </Description>
        </Box>
        <Box>
          <Title>Whack A Mole!</Title>
          <Description>
            The idea of whack-a-mole is simple! The player needs to hit the grid
            with the mole in as many times as possible until the time runs out.
            <strong>To play you must click with the left mouse button.</strong>
          </Description>
        </Box>
        <Box>
          <Title>Connect Four</Title>
          <Description>
            Connect Four (also known as Four Up, Plot Four, Find Four, Four in a
            Row, Four in a Line, Drop Four, and Gravitrips (in Soviet Union)) is
            a two-player board game in which the players first choose a color
            and then take turns dropping one colored disc from the top into a
            seven-column, six-row vertically suspended grid. The pieces fall
            straight down, occupying the lowest available space within the
            column. The objective of the game is to be the first to form a
            horizontal, vertical, or diagonal line of four of one's own discs.
            <strong>To play you must click with the left mouse button.</strong>
          </Description>
        </Box>
        <Box>
          <Title>Snake</Title>
          <Description>
            Snake is the common name for a video game concept where the player
            maneuvers a line which grows in length, with the line itself being a
            primary obstacle. The concept originated in the 1976 arcade game
            Blockade, and the ease of implementing Snake has led to hundreds of
            versions (some of which have the word snake or worm in the title)
            for many platforms. After a variant was preloaded on Nokia mobile
            phones in 1998, there was a resurgence of interest in the snake
            concept as it found a larger audience.
            <strong>
              To play you must move around the arrows on the keyboard.
            </strong>
          </Description>
        </Box>
        <Box>
          <Title>Space Invaders</Title>
          <Description>
            Space Invaders is a simple grid-based game in which you as the
            shooter have to shoot down as many alien invaders before they get to
            you.
            <strong>
              To play you must move around the arrows on the keyboard and shoot
              with space.
            </strong>
          </Description>
        </Box>
      </Content>
    </Container>
  );
};

export default Help;
