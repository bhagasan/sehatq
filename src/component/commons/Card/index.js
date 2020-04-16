import React from "react";
import CardLarge from "./CardLarge";
import CardDefault from "./CardDefault";

export default function Card(props) {
  const { type } = props;

  switch (type) {
    case "large":
      return <CardLarge {...props} />;
    default:
      return <CardDefault {...props} />;
  }
}
