import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px 18px;
  gap: 10px;
  min-width: 220px;
  border: transparent;
  transition: 0.3s background ease-in;
  height: 44px;
  color: #ffff;
  background: black;
  border-radius: 5px;

  &:hover {
    background-color: #ffff;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
export const OutLineButton = styled(Button)`
background-color: white;
color: black;
border: 2px solid black;
&:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.3s background ease-in;
  }
`;