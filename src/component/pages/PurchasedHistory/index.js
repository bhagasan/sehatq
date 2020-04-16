import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import { Color } from "../../../helper/Colors";
import Card from "../../commons/Card";

import IconBack from "../../../assets/icons/back.png";

function PurchasedHistory(props) {
  const { value, history } = props;

  function renderList(data) {
    let temp = [];
    if (Object.keys(data).length > 0) {
      const { purchased } = data;
      if (purchased) {
        temp = purchased.map((d, idx) => (
          <Link key={`${d.id}-${idx}`} to={`/barang/detail/${d.id}`}>
            <Card title={d.title} imgUrl={d.imageUrl} description={d.price} />
          </Link>
        ));
      }
    }
    return temp;
  }

  return (
    <Wrapper>
      <Nav>
        <BtnIcon onClick={() => history.goBack()}>
          <img src={IconBack} alt="back" />
        </BtnIcon>
      </Nav>
      <h3>Purchased History</h3>
      <ListContainer>{renderList(value)}</ListContainer>
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  value: state,
});

export default connect(mapStateToProps)(PurchasedHistory);

const Wrapper = Styled.div`
  position: relative;
  padding: 52px 18px;
`;
const ListContainer = Styled.div`
  display: grid;
  grid-row-gap: 16px;
  margin-top: 32px;
  max-height: calc(100vh - 94px);
  overflow: auto;
  padding-bottom: 32px;
  -ms-overflow-style: none;
  ::-webkit-scrollbar{
      display:none;
    }
    
`;
const Nav = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${Color.grey};
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  background-color: ${Color.white};
`;
const BtnIcon = Styled.button`
  background-color: transparent;
  border: none;

  img{
    filter: grayscale(1);
    width: 18px;
  }
`;
