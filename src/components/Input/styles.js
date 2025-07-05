import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  max-width: 275px;
  height: 35px;
  border-bottom: 1px solid #3b3450;

  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;
export const IconContainer = styled.div`
  margin-right: 10px;
`;

export const InputText = styled.input`
  background-color: transparent;
  color: #fff;
  border: 0;
  height: 35px;
  width: 100%;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margim: 5px 0;
`;
