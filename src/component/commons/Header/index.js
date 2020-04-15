import React from "react";
import Styled from "styled-components";
import { Color } from "../../../helper/Colors";

export default function Header(props) {
  return (
    <Wrapper>
      <div></div>
      <div></div>
    </Wrapper>
  );
}

const Wrapper = Styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 5px 20px;
  background-color: ${Color.white};
  border-bottom: 1px solid ${Color.grey};
`;
