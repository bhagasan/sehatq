import React from "react";
import Styled from "styled-components";
import Image from "../Image";
import { Color } from "../../../helper/Colors";

export default function CardDefault(props) {
  const { title, description, imgUrl, size } = props;
  return (
    <Wrapper size={size}>
      <Thumbnail>
        <Image src={imgUrl} alt="thumbnail" />
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
  overflow: hidden;
`;

const Details = Styled.div`
  padding: 5px;
  h1{
    font-size: 16px;
    margin-top: 0;
    text-transform: capitalize;
  }
  p{
    font-size: 16px;
    margin: 0;
  }
`;

const Wrapper = Styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 70px calc(100% - 80px);
  grid-gap: 10px;
`;
