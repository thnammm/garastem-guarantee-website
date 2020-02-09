import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { image as Image, searchList as SearchList, addList as AddList } from "./MainView";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";

const ProductIndex = () => {
  const productListOnClick = () => {
  }

  return (
    <div className="row pageDecoration">
      <div className="col-md-12 pageTitle">
        GARASTEM | Hệ thống quản lý dành cho Quản trị viên | <span className="pageTitleHighlight"> QUẢN LÝ SẢN PHẨM </span>
      </div>
      <div className="col-md-12 topLineSpacing"></div>
          <div className="col-md-12 productMainBar">
            <div className="row" style={{ margin: "0", padding: "15px 20px" }}>
              <div className="col-md-6 searchBar">
                <input
                  className="form-control searchBarInput"
                  type="text"
                  placeholder="Tìm kiếm từ dữ liệu của 22,152,779 sản phẩm"
                  aria-label="Search"
                />
                <Link to="/admin/product/searchList"><button className="btn searchBarButton"> Tìm kiếm </button></Link>
              </div>
              <div className="col-md-2 filterBar">
                <div className="form-group" style={{ margin: "0" }}>
                  <select className="form-control selectListFilterBar" id="">
                    <option value="productCode">Mã sản phẩm</option>
                    <option value="productName">Tên sản phẩm</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3 buttonBar">
                <Link to="/admin/product/addList"><button className="btn listProductButton"> Nhập danh sách sản phẩm </button></Link>
              </div>
            </div>
          </div>
          <div className="col-md-12 productMainView">
            <Switch>
              <Route path="/admin/product/searchList" component={SearchList} />
              <Route path="/admin/product/addList" component={AddList} />
              <Route component={Image} />
            </Switch>
          </div>
    </div>
  );
};

export default ProductIndex;
