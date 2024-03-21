import styled from "styled-components";
import StartGame from "./components/homepage/StartGame";
import { useState } from "react";
import GamePlay from "./components/gameplay/GamePlay";

const App = () => {
  const [isGameStarted, SetIsGameStarted] = useState(false);
  const toggleGamPlay = () => {
    SetIsGameStarted((prev) => !prev)
  };
  return (
    <Conatiner>
      {
        isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamPlay} />
      }
    </Conatiner>
  );
}

export default App;

const Conatiner = styled.div`
max-width: 980px;
  /* display: flex; */
  margin: 0 auto;
  gap: 100px;
  align-self: center;
  align-items: center;
  height: 100vh;
  
`;
