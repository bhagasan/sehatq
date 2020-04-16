import React from "react";
import Styled, { css } from "styled-components";
import { Color } from "../../../helper/Colors";

export default function Button(props) {
  const { type } = props;
  return (
    <Btn type={type} {...props}>
      {props.children}
    </Btn>
  );
}

const Btn = Styled.button`
  border: 1px solid ${Color.black};
  font-size: 16px;
  width: max-content;
  padding: 8px 28px;
  border-radius: 8px;

  ${({ type }) =>
    type === "secondary"
      ? css`
          color: ${Color.black};
          background-color: ${Color.white};
        `
      : css`
          color: ${Color.white};
          background-color: ${Color.black};
        `}
`;
