import React from "react";
import Styled from "styled-components";

import Image from "../Image";

export default function Carousel(props) {
  const { data } = props;
  return (
    <Wrapper>
      <Slider>
        {data.map(({ id, imageUrl, name }) => (
          <Item key={id}>
            <Image src={imageUrl} alt={name} />
            <span>{name}</span>
          </Item>
        ))}
      </Slider>
    </Wrapper>
  );
}

const Wrapper = Styled.div`
  position: relative;
  overflow-x: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar{
      display:none;
    }
`;

const Slider = Styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  padding: 10px 20px;
`;

const Item = Styled.div`
  width: 80px;
  text-align: center;
  &>div{
    width: 60px;
    margin: auto;
  }
  span{
    font-size: 12px;
  }
`;
