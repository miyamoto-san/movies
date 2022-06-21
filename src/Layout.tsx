import React from 'react';

import { Global, Container } from './styles'

function Layout({ children } : React.PropsWithChildren<{}>) {
  return (
    <>
      <Global />
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout;
