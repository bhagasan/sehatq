import React from "react";
import Styled from "styled-components";
import Image from "../Image";
import { Color } from "../../../helper/Colors";
import LikeBtn from "../LikeBtn";

export default function CardLarge(props) {
  const { title, description, imgUrl, size, linkTo, history } = props;
  return (
    <Wrapper size={size}>
      <Thumbnail>
        <Image
          src={imgUrl}
          alt="thumbnail"
          size="landscape"
          onClick={() => (linkTo ? history.push(linkTo) : {})}
        />
        <LikeBtn className="likeBtn" />
      </Thumbnail>
      <Details onClick={() => (linkTo ? history.push(linkTo) : {})}>
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
      </Details>
    </Wrapper>
  );
}

const Thumbnail = Styled.div`
  position: relative;
  border: 1px solid ${Color.grey};

  .likeBtn{
    position: absolute;
    right: 16px;
    top: calc(100% - 21px);
  }
`;

const Details = Styled.div`
  padding: 5px;
  h1{
    font-size: 16px;
    margin-top: 0;
  }
  p{
    font-size: 16px;
  }
`;

const Wrapper = Styled.div`
  position: relative;
  /* box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px; */
  /* border-radius: 8px;
  overflow: hidden; */
`;
