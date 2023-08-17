import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled(Form)`
  margin: 0 auto;
  padding: 10px 30px;
  background-color: #edc3ca;
  border: 1px solid #48494a;
`;

export const Title = styled.h3`
  margin: 10px 0;
  text-align: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  color: #70135f;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #120d14;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  height: 20px;
  margin-top: 4px;
  display: block;
  padding: 4px;
  border: 1px solid #48494a;
  font-size: 16px;
`;

export const ErrorValue = styled.div`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
  color: red;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #120d14;
  border-radius: 8px;
  background-color: #120d14;
  font-size: 16px;
  color: #edc3ca;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
