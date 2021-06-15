import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 20px;
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

max-width: 400px;

background-color: #00FFBF;
border: 5px solid red;
border-radius: 25px;


@media (max-width: 300px) {
  flex-direction: column;
  align-items: center;
}
`;

export const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
margin: 15px;
flex-wrap: wrap;


`;

export const Picture = styled.img`
  height: 96px;
  width: 96px;
  float: left;
  display: block;

  @media (min-width: 400px) {
    height: 96px;
    width: 96px;
  }
`;