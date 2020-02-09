import React from "react";
import ExcelReader from "./AddList";

export const image = () => (
  <img
    className="productBackground"
    src="/img/background/product-bg.png"
    alt="Product Background"
  />
);

export const searchList = () => (
  <div className="no">
    <div className="yes"> yes </div>
  </div>
);

export const addList = () => (
  <div>
    <ExcelReader />
  </div>
);
