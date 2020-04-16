import React, { useState } from "react";
import Styled, { css } from "styled-components";

import { Color } from "../../../helper/Colors";
import Input from "../../commons/Input";
import Button from "../../commons/Button";
import Checkbox from "../../commons/Checkbox";

import IMG from "../../../assets/images/login-bg.svg";

function Login(props) {
  const { history } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <Wrapper isActive={isActive}>
      <Image src={IMG} alt="bg" />
      <h1>Welcome</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <OpenLogin onClick={() => setIsActive(true)}>I have an account</OpenLogin>
      <Form>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="******"
        />
        <Row>
          <Checkbox label="Remember Me" />
          <Button onClick={() => history.push("/homepage")}>Login</Button>
        </Row>
      </Form>
    </Wrapper>
  );
}

export default Login;

const Image = Styled.img`
  display: block;
  width: 320px;
  margin: auto;
  margin-top: 50px;
  transition-duration: .3s;
  transition-timing-function: cubic-bezier(0,.01,.21,.99);
  /* transform: scale(1.5); */
`;

const OpenLogin = Styled.button`
  background-color: ${Color.black};
  height: 54px;
  width: 240px;
  color: ${Color.white};
  border: none;
  border-radius: 8px;
  position: absolute;
  left: 50%;
  bottom: 12vh;
  transform: translateX(-50%);
  transition-duration: .3s;
  transition-timing-function: cubic-bezier(0,.01,.21,.99);
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
  transition-duration: .3s;
  opacity: 0;
  pointer-events: none;
  transition-timing-function: cubic-bezier(0,.01,.21,.99);
  
`;

const Wrapper = Styled.div`
  position: relative;
  background-color: ${Color.primary};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color:${Color.white};

  h1{
    text-align: center;
    color:${Color.white};
  }
  p{
    color: ${Color.white};
    max-width: 280px;
    margin: auto;
    margin-bottom: 24px;
    text-align: center;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      ${Image} {
        width: 240px;
        margin-top: 30px;
      }
      ${Form} {
        opacity: 1;
        pointer-events: auto;
      }
      ${OpenLogin} {
        transform: translate(-50%, 30px);
        opacity: 0;
      }
    `}
`;
