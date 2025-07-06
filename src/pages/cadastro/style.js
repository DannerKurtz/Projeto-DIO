import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h2 {
  }
`;
export const Title = styled.h2`
  color: #ffffff;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 388px;
  line-height: 100%;
`;

export const Text = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  width: 462px;
  line-height: 100%;
  margin: 40px 0;
`;
