import React from 'react';
import { CardContainer as Container } from '../styles';

function Card({ children } : React.PropsWithChildren<{}>) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Card;