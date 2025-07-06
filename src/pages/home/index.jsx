import Button from '../../components/Button';
import Header from '../../components/Header';
import { TextContent, Title, TitleHighlight, Container } from './styles';
import banner from './../../assets/image 1.png';

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
        <div>
          <img
            src={banner}
            alt='banner'
          />
        </div>
      </Container>
    </div>
  );
};
