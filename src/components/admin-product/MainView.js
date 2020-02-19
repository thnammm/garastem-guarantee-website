import React from "react";
import ExcelReader from "./AddList";
import { eachProduct as EachProduct } from "./EachProduct";
import Product from "./Product";
import ProductChild from "./ProductChild";

// Import Datas
import {product as productData} from "../../datatest/productData"

export const image = () => (
  <img
    className="productBackground"
    src="/img/background/product-bg.png"
    alt="Product Background"
  />
);

export const searchList = () => (
  <div className="row searchResult">
    <EachProduct productData={productData} />
  </div>
);

export const addList = () => (
  <div>
    <ExcelReader />
  </div>
);

export const product = (props) => (
  <>
    <Product {...props} product={productData}/>
    <ProductChild />
  </>
)
