import styled from 'styled-components';
import image from '../images/background.jpg'

export const Title = styled.h1`
  font-family: 'Handlee', cursive;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  width: 180px;
  padding-bottom: 5px;
  border-radius: 10px;
  background-color: #fff;
`;

export const TitleLogin = styled.h1`
  font-family: 'Handlee', cursive;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  width: 80px;
  padding-bottom: 5px;
  border-radius: 10px;
  background-color: #fff;
`;

export const Main = styled.main`

height: 100vh;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
  margin: 0 auto;
  padding-top: 22px;
  background-image: url('${image}');
`