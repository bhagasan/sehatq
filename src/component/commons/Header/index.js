import React, { useState } from "react";
import Styled, { css } from "styled-components";
import { Color } from "../../../helper/Colors";
import { Link } from "react-router-dom";
import Input from "../Input";
import Card from "../Card";

import IconSearch from "../../../assets/icons/search.png";
import IconHeart from "../../../assets/icons/heart-color.png";

function Header(props) {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState();

  function renderList(filter) {
    let temp = [];
    if (filter) {
      data.promo.forEach(({ title, price, id, imageUrl }) => {
        const tempName = title.toLowerCase();
        let isExist = tempName.indexOf(filter.toLowerCase());
        if (isExist >= 0) {
          temp.push(
            <Link key={title} to={`/barang/detail/${id}`}>
              <Card imgUrl={imageUrl} title={title} description={price} />
            </Link>
          );
        }
      });
    }
    return temp;
  }

  return (
    <Wrapper isOpen={isOpen}>
      <div>
        <Input
          type="text"
          prefix={IconSearch}
          placeholder="Cari Nitendo"
          onFocus={() => setIsOpen(true)}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {isOpen ? (
          <Button onClick={() => setIsOpen(false)}>Batal</Button>
        ) : (
          <Button onClick={() => {}}>
            <img src={IconHeart} alt="favorite" />
          </Button>
        )}
      </div>
      <div>{renderList(searchValue)}</div>
    </Wrapper>
  );
}

export default Header;

const Button = Styled.button`
  background-color: transparent;
  border: none;

  img{
    filter: grayscale(1);
    width: 28px;
  }
`;

const Wrapper = Styled.div`
  position: relative;
  width: 100%;
  height: 52px;
  padding: 5px 20px;
  background-color: ${Color.white};
  border-bottom: 1px solid ${Color.grey};
  transition-duration: .3s;
  transition-timing-function: cubic-bezier(0,.01,.21,.99);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  overflow: hidden;

  &>div{
    :first-child{
      width: 100%;
      display: grid;
      grid-template-columns: calc(100% - 54px) 44px;
      grid-gap: 10px;
    }
    :last-child{
      display: grid;
      grid-row-gap: 16px;
      margin-top: 32px;
      max-height: calc(100vh - 94px);
      overflow: auto;
      -ms-overflow-style: none;
      ::-webkit-scrollbar{
          display:none;
        }
    }
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      position: fixed;
      height: 100vh;
    `}
`;
