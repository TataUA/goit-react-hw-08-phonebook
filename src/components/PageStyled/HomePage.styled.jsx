import styled from '@emotion/styled';

export const Title = styled.h1`
  margin: 30px 0;
  text-align: center;
  justify-content: center;
  font-weight: 800;
  font-size: 34px;
  color: #70135f;
  @media screen and (min-width: 768px) {
    font-size: 44px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 600;
  margin-bottom: 30px;
  line-height: 1.5;
`;
export const Image = styled.img`
  width: 250px;
  display: block;
  margin: auto;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  -webkit-animation: pulsing 4s infinite;
  animation: pulsing 4s infinite;
  @-webkit-keyframes pulsing {
    0% {
      -webkit-transform: scale(0.8, 0.8);
      transform: scale(0.8, 0.8);
    }
    50% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    100% {
      -webkit-transform: scale(0.8, 0.8);
      transform: scale(0.8, 0.8);
    }
  }

  @keyframes pulsing {
    0% {
      -webkit-transform: scale(0.8, 0.8);
      transform: scale(0.8, 0.8);
    }
    50% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    100% {
      -webkit-transform: scale(0.8, 0.8);
      transform: scale(0.8, 0.8);
    }
  }
`;
