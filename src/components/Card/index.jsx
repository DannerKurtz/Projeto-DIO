import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from './styles';

export default function Card() {
  return (
    <CardContainer>
      <ImageBackground />
      <Content>
        <UserInfo>
          <UserPicture />
          <div>
            <h4>Teste</h4>
            <p>Há um tempo</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito o curso de html e css no bootcamp dio de Global
            avanade...<strong>Saiba mais.</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>HTML, CSS e JavaScript</h4>
          <p>
            <FiThumbsUp />
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
}
