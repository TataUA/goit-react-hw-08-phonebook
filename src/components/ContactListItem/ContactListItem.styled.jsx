import styled from '@emotion/styled';

export const ItemLi = styled.li`
  padding: 8px;
  display: flex;
  &:nth-of-type(2n) {
    background-color: #edc3ca;
  }
  font-weight: 600;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ItemSpan = styled.span`
  width: 200px;
  margin-right: 40px;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    margin-right: 180px;
  }
`;

export const Button = styled.button`
  margin-right: 20px;
  padding: 4px;
  border: 1px solid #120d14;
  border-radius: 8px;
  background-color: #120d14;
  font-size: 12px;
  color: #edc3ca;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
