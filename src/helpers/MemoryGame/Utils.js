import fries from "../../assets/images/fries.png";
import cheeseburger from "../../assets/images/cheeseburger.png";
import icecream from "../../assets/images/ice-cream.png";
import pizza from "../../assets/images/pizza.png";
import milkshake from "../../assets/images/milkshake.png";
import hotdog from "../../assets/images/hotdog.png";

export const cardArray = [
  {
    name: "fries",
    img: fries,
  },
  {
    name: "cheeseburger",
    img: cheeseburger,
  },
  {
    name: "ice-cream",
    img: icecream,
  },
  {
    name: "pizza",
    img: pizza,
  },
  {
    name: "milkshake",
    img: milkshake,
  },
  {
    name: "hotdog",
    img: hotdog,
  },
  {
    name: "fries",
    img: fries,
  },
  {
    name: "cheeseburger",
    img: cheeseburger,
  },
  {
    name: "ice-cream",
    img: icecream,
  },
  {
    name: "pizza",
    img: pizza,
  },
  {
    name: "milkshake",
    img: milkshake,
  },
  {
    name: "hotdog",
    img: hotdog,
  },
].sort(() => 0.5 - Math.random());

export const displayNumber = (number) =>
  number < 10 ? `0${number}` : `${number}`;

export const positionsArray = Array.from(Array(9).keys());
