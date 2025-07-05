import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { TextContent, Title, TitleHighlight, Container } from './styles';

export const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            o seu futuro global agora
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title={'Começar'}
            variant={'secundary'}
            onClick={() => null}
          />
        </div>
        <div></div>
      </Container>
    </div>
  );
};
