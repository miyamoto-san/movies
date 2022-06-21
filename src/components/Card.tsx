import React from 'react';

function Card({ children } : React.PropsWithChildren<{}>) {
  return (
    <>
      {children}
    </>
  )
}

export default Card;