import React from "react";
import styled from "styled-components";

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];



  const numberSelectorHandler = (value) => {
    setSelectedNumber(value)
    setError("")
  }
  // console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, index) => {
          return (
            <Box
              isSelected={value == selectedNumber}
              key={index}
              onClick={() => numberSelectorHandler(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 10px;
  }
  p {
    font-size: 20px;
    font-weight: 700px;
    margin-right: 15px;
  }
  .error{
    color: red;
    font-weight: bold;
  }
`;
const Box = styled.div`
  height: 45px;
  width: 45px;
  border: 1px solid black;
  display: grid;
  /* gap: 3px; */
  place-items: center;

  font-size: 20px;
  margin-right: 3px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  transition: 0.1s background ease-in;
`;
