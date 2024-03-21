import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { Button, OutLineButton } from "../styled/Button";
import Rules from "./Rules";


const GamePlay = () => {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState()
  const [showRule, setShowRule] = useState(false)



  const generateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random() * (max - min ) + min));
    return Math.floor(Math.random() * (max - min) + min);
  }



  const roleDice = () => {
    if (!selectedNumber) {
      setError("Your have not selected any Number");
      return;
    }
    setError(null)
    const randomNumber = generateRandomNumber(1, 7)
    setCurrentDice((prev) => randomNumber);


    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - 2)
    }
    setSelectedNumber(undefined)
  }

  const resetScore = () => {
    setScore(0)
  }

  return (
    <MainContainer>
      <div className="top-main">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice
        currentDice={currentDice}
        roleDice={roleDice}
      />

      <div className="btns">
        <OutLineButton
          onClick={resetScore}
        >Reset</OutLineButton>
        <Button onClick={() => setShowRule(prev => !prev)}>{showRule ? "Hide " : "Show "}Rules</Button>
      </div>
      {showRule && <Rules />}

    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
display: flex;
flex-direction: column;
  .top-main {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .btns{
    display: flex;
    /* margin: 0 auto; */
    margin-left: 830px;
    padding-top: 25px;
    flex-direction: column;
    justify-content: center;
    /* max-width: 220px; */
    gap: 15px;
    align-items: center;
    width: 90px;
  }
`;
