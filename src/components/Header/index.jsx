import React from 'react';
import {
  BuscarInputContainer,
  Container,
  ImageLogo,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
} from './styles';
import logo from './../../assets/logo-dio 1.png';
import Button from '../Button';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <ImageLogo
            src={logo}
            alt='logo'
          />
          <MenuRight />
          <BuscarInputContainer>
            <Input placeholder='Buscar' />
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight>Home</MenuRight>
          <Button title={'Entrar'} />
          <Button title={'Cadastrar'} />
        </Row>
      </Container>
    </Wrapper>
  );
}
