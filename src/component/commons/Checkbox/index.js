import React from "react";
import Styled from "styled-components";
// import { Color } from "../../../helper/Colors";

export default function Checkbox(props) {
  const { label } = props;
  return (
    <Wrapper>
      <input {...props} type="checkbox" />
      <span>{label}</span>
    </Wrapper>
  );
}

const Wrapper = Styled.label`
  display: flex;
  align-items: center;
  span{
    display: inline-block;
    margin-left: 12px;
  }
`;
