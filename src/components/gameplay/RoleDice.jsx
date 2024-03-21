import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({roleDice, currentDice}) => {




  return (
    <DiceContainer>
      <div className='dice-container'
        onClick={roleDice}
      >
        <img src={`/images/dice/dice_${currentDice}.png`} className='dice' alt="dice 1"
        />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.dice{
  margin-top:50px ;
  width: 150px;
  height: 160px;
  cursor: pointer;
}
`;