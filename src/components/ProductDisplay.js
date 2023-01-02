import React, { Fragment } from "react";
import AppProductCard from "./AppProductCard";

export default function ProductDisplay({ products }) {
  const displayProducts = () => {
    let results = products.map((product) => {
      return (
        <Fragment key={product.id}>
          <div className="col-md-4">
            <AppProductCard product={product} />
          </div>
        </Fragment>
      );
    });

    return results;
  };

  return (
    <div className="container">
      <div className="row">{displayProducts()}</div>
    </div>
  );
}
