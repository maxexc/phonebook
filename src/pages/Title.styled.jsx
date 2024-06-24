import styled from 'styled-components';
// import image from '../images/background.jpg'

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 54px;  
`

export const HeroSection = styled.section`
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  @media screen and (min-width: 921px) {
    gap: 50px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: 87% 50%;
  border-radius: 20px;
  @media screen and (max-width: 920px) {
    height: 400px;
  }
  @media screen and (max-width: 479px) {
    height: 300px;
  }
`;

export const ContentTitle = styled.h2`
  font-size: 24px;
  line-height: 1.4;
  position: relative;
  margin-bottom: 20px;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    height: 1px;
    width: 300px;
    background-color: #000;
    @media screen and (max-width: 920px) {
      width: 200px;
      font-size: 20px;
    }
  }
`;

export const ImgWrapper = styled.div`
  width: calc(100% / 2);
  flex-shrink: 0;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const ContentText = styled.p`
  font-size: 18px;
  line-height: 1.2;
  @media screen and (min-width: 771px) {
    line-height: 1.5;
  }
  @media screen and (min-width: 921px) {
    font-size: 21px;
    line-height: 1.8;
  }  
`;