import styled from "styled-components";
import React from "react";
import { Button } from "../styled/Button";


const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="dices">
        <img src="/images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

export default StartGame;
const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  gap: 100px;
  align-self: center;
  align-items: center;
  height: 100vh;
  .dices {
    img {
      width: 500px;
      height: 400px;
    }
  }
  .content {
    h1 {
      font-size: 70px;
      white-space: nowrap;
    }
  }
`;


