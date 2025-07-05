import React from 'react';
import { ButtonContainer } from './styles.js';

export default function Button({ title, variant = 'primary', onClick }) {
  return (
    <ButtonContainer
      variant={variant}
      onClick={onClick}
    >
      {title}
    </ButtonContainer>
  );
}
