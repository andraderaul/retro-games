import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(#d2d9db, #b0bcbf);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 1000px;
  width: 70%;
  padding: 4em 2em;
  background-color: #884aaf;
  border-radius: 30px;

  -webkit-box-shadow: 14px 17px 16px -6px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 14px 17px 16px -6px rgba(0, 0, 0, 0.63);
  box-shadow: 14px 17px 16px -6px rgba(0, 0, 0, 0.63);

  @media (max-width: 1440px) {
    width: 95%;
  }
`;
export const button = styled.span`
  position: absolute;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.6);

  -webkit-box-shadow: 0px -7px 75px 2px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px -7px 75px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0px -7px 75px 2px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.2, 1.2);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ButtonA = styled(button)`
  background-color: #62dbfb;
  top: 32%;
  right: 3%;
`;

export const ButtonB = styled(button)`
  background-color: #f2dc27;
  bottom: 32%;
  right: 10%;
`;

const arrow = styled.div`
  position: absolute;
  width: 8em;
  height: 2em;
  background-color: #ceccd7;
  top: 50%;
  left: 5%;
  border-radius: 5px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ArrowA = styled(arrow)`
  transform: rotate(90deg);
`;

export const ArrowB = styled(arrow)``;

export const Content = styled.div`
  width: 100%;
  justify-content: center;
  border-radius: 6px;
  max-width: 600px;
  min-height: 300px;
  border: 3px solid #2c2b2b;
  background-color: #2c2b2b;
  display: flex;
  flex-wrap: wrap;

  -webkit-box-shadow: inset -1px -1px 48px -16px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: inset -1px -1px 48px -16px rgba(0, 0, 0, 0.63);
  box-shadow: inset -1px -1px 48px -16px rgba(0, 0, 0, 0.63);
`;

const display = styled.div`
  min-width: 7em;
  min-height: 7em;
  background-color: #101319;
  border: 3px solid #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    color: #fff;
    margin: 0.3em 0;
    font-size: 20px;
  }

  span {
    color: #f83d00;
    font-size: 26px;
  }

  @media (max-width: 540px) {
    width: 5em;
    height: 5em;
    h3 {
      font-size: 15px;
    }

    span {
      color: #f83d00;
      font-size: 20px;
    }
  }
`;

export const WrapperDisplay = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 1em;
`;

export const Score = styled(display)`
  h3 {
  }
  span {
  }
`;

export const Attempts = styled(display)`
  h3 {
  }

  span {
  }
`;

export const Title = styled.div`
  display: flex;
  max-width: 10em;
  align-items: center;
  h1 {
    text-align: center;
  }
  @media (max-width: 540px) {
    font-size: 20px;
  }
`;

export const Image = styled.img`
  cursor: pointer;
  max-width: 100%;
  height: auto;
  margin: 1rem;
  border-radius: 4px;
  border: 5px solid #fff;
  &:hover {
    transform: scale(1.1, 1.1);
  }

  @media (max-width: 540px) {
    max-width: 50%;
    margin: 0.5rem;
  }
`;
