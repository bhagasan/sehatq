import React from "react";
import Styled from "styled-components";

export default function Input(props) {
  return (
    <Wrapper>
      <input {...props} />
    </Wrapper>
  );
}

const Wrapper = Styled.div`
  position: relative;

  input{
    height: 52px;
    padding: 4px 20px;
    font-size: 16px;
    width: 100%;
  }
`;
