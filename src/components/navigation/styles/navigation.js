import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    flex-wrap: wrap;


@media (max-width: 300px) {
  flex-direction: column;
  align-items: center;
}
`;

export const Pane = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
margin-top: 20px;
margin-bottom: 20px;
flex-wrap: wrap;

max-width: 430px;

background-color: #00FFBF;
border: 5px solid red;
border-radius: 25px;


@media (max-width: 300px) {
  flex-direction: column;
  align-items: center;
}
`;



export const Button = styled.button `
  display: block;
  background-color: #FF0000;
  width: 75px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 5px 5px;
  margin: 18px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #CC0000;
  }
`;

export const Input = styled.input`
  max-width: 150px;
  width: 100%;
  border: 0;
  padding: 10px;
  margin: 15px;
  height: 30px;
  box-sizing: border-box;
`;