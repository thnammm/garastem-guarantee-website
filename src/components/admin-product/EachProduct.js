import React from "react";
import { Link } from "react-router-dom";

export const eachProduct = props => {
  return props.productData.map(num => (
    <div key={num.key} className="col-md-2">
      <img className="" src="/img/product.png" />
      <Link to={"/admin/product/searchList/" + num.code}>
        <p className="eachProductName">{num.name}</p>
      </Link>
      <p className="eachProductCode"> {num.code} </p>
    </div>
  ));
};
