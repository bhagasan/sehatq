import React from "react";
import Styled, { css } from "styled-components";

export default function Image(props) {
  const { size, alt } = props;
  return (
    <Wrapper size={size}>
      <img {...props} alt={alt} />
    </Wrapper>
  );
}

const Wrapper = Styled.div`
  position: relative;
  width: 100%;
  img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
  }
  ${({ size }) => {
    switch (size) {
      case "landscape":
        return css`
          padding-top: 50%;
        `;
      case "portrait":
        return css`
          padding-top: 135%;
        `;
      default:
        return css`
          padding-top: 100%;
        `;
    }
  }}
`;
