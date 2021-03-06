import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Color } from "../../../helper/Colors";

import Card from "../../commons/Card";
import Button from "../../commons/Button";

import IconBack from "../../../assets/icons/back.png";
import IconShare from "../../../assets/icons/share.png";
import { buyProduct } from "../../../store/actions";

function DetailPage(props) {
  const { history, value, dispatch } = props;
  const { id: barangId } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    let temp = [];

    if (Object.keys(value).length > 0) {
      const { promo } = value.data;
      promo.forEach(({ id, title, imageUrl, description, price }) => {
        if (barangId === id) {
          temp = {
            id,
            title,
            imageUrl,
            description,
            price,
          };
        }
      });
      setData(temp);
    } else {
      history.push("/homepage");
    }
  }, [barangId, history, value]);

  function handleBuy() {
    if (value.purchased) {
      const temp = value.purchased;
      temp.push(data);
      dispatch(buyProduct(temp));
    } else {
      dispatch(buyProduct([data]));
    }
  }

  return (
    <Wrapper>
      <Nav>
        <BtnIcon onClick={() => history.goBack()}>
          <img src={IconBack} alt="back" />
        </BtnIcon>
        <BtnIcon onClick={() => {}}>
          <img src={IconShare} alt="share" />
        </BtnIcon>
      </Nav>
      {data && (
        <Card
          id={data.id}
          imgUrl={data.imageUrl}
          title={data.title}
          type="large"
          description={data.description}
        />
      )}
      <Footer>
        <div>
          <span>{data && data.price}</span>
          <Button onClick={handleBuy}>BUY</Button>
        </div>
      </Footer>
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  value: state,
});

export default connect(mapStateToProps)(DetailPage);

const BtnIcon = Styled.button`
  background-color: transparent;
  border: none;

  img{
    filter: grayscale(1);
    width: 24px;
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

const Footer = Styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 52px;
  border-top: 1px solid ${Color.grey};
  background-color: ${Color.white};
  display: flex;
  align-items: center;
  padding: 0 18px;
  &>div{
    margin-left: auto;
    width: max-content;
    span{
      display: inline-block;
      margin-right: 18px;
    }
  }
  
`;

const Wrapper = Styled.div`
  position: relative;
  padding: 72px 18px;
`;
