import styled from 'styled-components'
import React from 'react'

const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play dice</h2>
            <div className='text'>
                <p>Select Any Number</p>
                <p>Click on Dice image</p>


                <p>After click dice if selected number is equal to dice number you will get same point as dice{" "}</p>
                <p>if you get wrong guess then 2 point will be deducted</p>
            </div>
        </RulesContainer>
    )
}

export default Rules

const RulesContainer = styled.div`
width: 550px;
/* margin-bottom: 100px; */
/* height: 200px; */
/* margin: 0 auto; */
/* margin-top: 20px; */
border-radius: 10px;
background-color: #FBF1F1;
padding: 5px;
h2{
    font-size: 16px;
    /* font-weight: bold; */
}
.text{
    margin-top:10px ;
    font-size: 12px;
}
`;
