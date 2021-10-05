import React from "react";
import Product from "./Products";

export default function ProductsList(props) {
  let productsarray = props.products.map((element) => (
    <Product memorie={element} />
  ));

  return <div className="product-List">{productsarray}</div>;
}
