import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Forms = styled(Form)`
  width: 260px;
  border: 1px solid #c3dbff;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 25px;
  border: 1px solid white;
  border-radius: 10%;
  background-color: #c3dbff;
  cursor: pointer;
  &:hover {
    background-color: #2884fc;
  }
  margin-bottom: 10px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  align-items: center;

  /* position: relative; */
`;

export const Input = styled(Field)`
  width: 130px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid #c3dbff;
  :focus-visible {
    outline: 1px solid #2884fc;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 15px;
  text-align: center;
`;
