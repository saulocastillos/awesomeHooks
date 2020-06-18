import React from 'react';

import { Container, Title, Component } from './styles';

const Card = ({component, name, onClickInside}) => {
  
  return (
    <Container>
      <Title>{name}</Title>
      <Component>{component(onClickInside)}</Component>
    </Container>
  );
}

export default Card;