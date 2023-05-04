import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 20px;
`;

export const OptionButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: #00807b;
  color: white;
  font-size: 18px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  :hover,
  :focus {
    background-color: violet;
    color: black;
  }
`;
