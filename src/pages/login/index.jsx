import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubLogin,
  Title,
  TitleLogin,
  Wrapper,
} from './styles';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  email: yup
    .string()
    .email('Email inválido')
    .required('O campo e-mail é requirido'),
  password: yup
    .string()
    .required('O campo senha é requirido')
    .min(6, 'Senha muito curta'),
});

export const Login = () => {
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
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate('/feed');
      } else {
        alert('usuário não encontrado');
      }
    } catch (error) {
      alert('houve um erro tente novamente');
    }
  };
  return (
    <div>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubLogin>faça seu login e make the change._</SubLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                errorMessage={errors.email?.message}
                name={'email'}
                control={control}
                placeholder={'Email'}
              />
              <Input
                errorMessage={errors.password?.message}
                name={'password'}
                control={control}
                placeholder={'Senha'}
                type={'password'}
              />
              <Button
                title={'Entrar'}
                variant={'secundary'}
                type={'submit'}
              />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </div>
  );
};
