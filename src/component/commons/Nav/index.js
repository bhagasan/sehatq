import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { Color } from "../../../helper/Colors";

export default function Nav() {
  return (
    <Wrapper>
      <Link>
        <span>Home</span>
      </Link>
      <Link>
        <span>Feed</span>
      </Link>
      <Link>
        <span>Cart</span>
      </Link>
      <Link>
        <span>Profile</span>
      </Link>
    </Wrapper>
  );
}

const Wrapper = Styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: ${Color.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eaeaea;
  span{
    display: block;
    padding: 14px 24px;
  }
`;
