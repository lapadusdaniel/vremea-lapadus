import React from 'react';
import Container from 'react-bootstrap/Container';

function Page404() {
  return (
    <Container className="text-center">
      <h1>404 - Pagina Nu Există</h1>
      <p>Ne pare rău, dar pagina pe care ai încercat să o accesezi nu există.</p>
    </Container>
  );
}

export default Page404;