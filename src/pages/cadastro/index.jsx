import React from 'react';
import Header from '../../components/Header';
import { Container, Text, Title } from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

const schema = yup.object({
  email: yup
    .string()
    .email('Email inválido')
    .required('O campo e-mail é requirido'),
  password: yup
    .string()
    .required('O campo senha é requirido')
    .min(6, 'Senha muito curta'),
  name: yup
    .string()
    .required('O campo nome é requirido')
    .min(3, 'Nome muito curto'),
});

export default function Cadastro() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  console.log(isValid, errors);

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(`users`);
      const { data: createData } = await api.post('/users', formData);
      console.log('o que tem no data: ', data);
      console.log('o que tem no createData: ', createData);
      navigate('/login');
    } catch (error) {
      alert('houve um erro tente novamente');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </div>
        <div>
          <Title>Comece agora grátis</Title>
          <Text>Crie sua conta e make the change._</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              errorMessage={errors.name?.message}
              name={'name'}
              placeholder={'Nome'}
              control={control}
            />
            <Input
              errorMessage={errors.email?.message}
              name={'email'}
              placeholder={'E-mail'}
              control={control}
            />
            <Input
              errorMessage={errors.password?.message}
              name={'password'}
              placeholder={'Senha'}
              control={control}
              type={'password'}
            />

            <Button
              title={'Criar minha conta'}
              variant='secundary'
              type='submit'
            />
          </form>

          <Text>
            Ao clicar em "criar minha conta grátis", declaro que aceito as
            Políticas de Privacidade e os Termos de Uso da DIO.
          </Text>
        </div>
      </Container>
    </>
  );
}
