import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import Axios from "axios";
import { connect } from "react-redux";

import Nav from "../../commons/Nav";
import Header from "../../commons/Header";
import { Container } from "../../commons/Layout";
import Card from "../../commons/Card";
import Carousel from "../../commons/Carousel";
import Loading from "../../commons/Loading";

const API = "https://private-4639ce-ecommerce56.apiary-mock.com/home";

function Homepage(props) {
  const { history, value } = props;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Axios.get(API)
      .then((res) => {
        const { category, productPromo: promo } = res.data[0].data;
        setIsLoading(false);
        setData({
          promo,
          category,
        });
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  function renderPromo(params) {
    let temp = {};
    if (params) {
      temp = params.promo.map(({ id, imageUrl, title, loved }) => (
        <Card
          key={id}
          id={id}
          linkTo={`/barang/detail/${id}`}
          imgUrl={imageUrl}
          title={title}
          type="large"
          history={history}
        />
      ));
    } else {
      return null;
    }
    return temp;
  }

  return (
    <Wrapper>
      <Loading isLoading={isLoading} type="full" />
      <Header />
      {data && <Carousel data={data.category} />}
      <Container>
        <h3>Promo</h3>
        <List>{renderPromo(data)}</List>
      </Container>
      <Nav />
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  value: state,
});

export default connect(mapStateToProps)(Homepage);

const Wrapper = Styled.div`
  position: relative;
  padding-bottom: 72px;
  padding-top: 52px;
`;

const List = Styled.div`
  display: grid;
  grid-row-gap: 32px;
`;
