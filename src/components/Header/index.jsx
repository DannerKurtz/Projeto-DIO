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
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
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
          <MenuRight onClick={() => navigate('/')}>Home</MenuRight>
          <Button
            title={'Entrar'}
            onClick={() => navigate('/login')}
          />
          <Button
            title={'Cadastrar'}
            onClick={() => navigate('/cadastro')}
          />
        </Row>
      </Container>
    </Wrapper>
  );
}
