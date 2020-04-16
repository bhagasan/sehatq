import React from "react";
import Styled, { css } from "styled-components";
import { Color } from "../../../helper/Colors";

export default function Input(props) {
  const { prefix } = props;
  return (
    <Wrapper prefix={prefix}>
      <input {...props} />
    </Wrapper>
  );
}

const Wrapper = Styled.div`
  position: relative;

  input{
    height: 42px;
    padding: 4px 20px;
    font-size: 16px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${Color.grey};
    line-height: 1;
  }

  ${({ prefix }) =>
    prefix &&
    css`
      :before {
        content: "";
        position: absolute;
        left: 12px;
        top: 12px;
        width: 16px;
        height: 16px;
        background-image: url(${prefix});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.4;
      }
      input {
        padding-left: 42px;
      }
    `}
`;
