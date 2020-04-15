import React from "react";
import Styled from "styled-components";

import Nav from "../../commons/Nav";
import Header from "../../commons/Header";
import { Container } from "../../commons/Layout";
import Card from "../../commons/Card";

function Homepage() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <h1>Homepage</h1>
        <Card />
      </Container>
      <Nav />
    </Wrapper>
  );
}

export default Homepage;

const Wrapper = Styled.div`
  position: relative;
  padding-bottom: 72px;
  /* min-height: 100vh; */
`;
