import React from "react";
import Styled, { css } from "styled-components";
import Image from "../Image";
import { Color } from "../../../helper/Colors";

export default function Card(props) {
  const { title, description, imgUrl } = props;
  return (
    <Wrapper>
      <Thumbnail>
        <Image src={imgUrl} alt="thumbnail" size="landscape" />
      </Thumbnail>
      <Details>
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
      </Details>
    </Wrapper>
  );
}

const Thumbnail = Styled.div`
  position: relative;
  border: 1px solid ${Color.grey};
`;

const Details = Styled.div`
  padding: 5px;
  p{
    font-size: 16px;
  }
`;

const Wrapper = Styled.div`
  position: relative;

`;
