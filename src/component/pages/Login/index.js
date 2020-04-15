import React from "react";
import Styled from "styled-components";

import Input from "../../commons/Input";
import Button from "../../commons/Button";
import Checkbox from "../../commons/Checkbox";

function Login(props) {
  const { history } = props;
  return (
    <Wrapper>
      <h1>Login</h1>
      <Form>
        <Input type="text" id="username" name="username" />
        <Input type="password" id="password" name="password" />
        <Row>
          <Checkbox label="Remember Me" />
          <Button onClick={() => history.push("/homepage")}>Login</Button>
        </Row>
      </Form>
    </Wrapper>
  );
}

export default Login;

const Wrapper = Styled.div`
  position: relative;
`;

const Row = Styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Form = Styled.div`
  position: relative;
  width: calc(100% - 32px);
  margin: auto;
  display: grid;
  grid-row-gap: 16px;
  padding: 12px;
`;
