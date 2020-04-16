import React from "react";
import Styled from "styled-components";
import { Color } from "../../../helper/Colors";

import Heart from "../../../assets/icons/heart.png";
import HeartColor from "../../../assets/icons/heart-color.png";

export default function LikeBtn(props) {
  const { className } = props;
  return (
    <Wrapper className={className}>
      <label>
        <input type="checkbox" />
        <Like>
          <img className="like" src={Heart} alt="like" />
          <img className="liked" src={HeartColor} alt="liked" />
          {/*<img className="splash" src={HeartColor} alt="liked" /> */}
        </Like>
      </label>
    </Wrapper>
  );
}

const Like = Styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img{
    width: 24px;
    /* position: absolute; */
    left: 0;
    top: 0;
    &.like{
      display: block;
    }
    &.liked{
      display: none;
    }
    /* &.splash{
      position: absolute;
      left: 0;
      top: 0;
      pointer-events: none;
      transition-duration: .5s;
      opacity: 1;
      display: none;
    } */
  }
`;

const Wrapper = Styled.div`
  position: relative;
  background-color: ${Color.white};
  width: 42px;
  height: 42px;
  border-radius: 100%;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
  input{
    display:none;
  }
  input:checked + ${Like} img{
    &.like{
      display: none;
    }
    &.liked{
      display: block;
    }
    /* &.splash{
      display: block;
      transform: scale(2);
      opacity: 0;
    } */
  }
`;
