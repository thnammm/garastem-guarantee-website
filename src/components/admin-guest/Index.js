import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { searchList as SearchList } from "./MainView";

const GuestIndex = () => (
    <div className="row pageDecoration">
        <div className="col-md-12 pageTitle">
            GARASTEM | Hệ thống quản lý dành cho Quản trị viên | <span className="pageTitleHighlight"> QUẢN LÝ KHÁCH HÀNG </span>
        </div>
        <div className="col-md-12 topLineSpacing"></div>
        <div className="col-md-12 productMainBar">
          <div className="row" style={{ margin: "0", padding: "15px 20px" }}>
            <div className="col-md-6 searchBar" style={{ margin: 0}}>
              <input
                className="form-control searchBarInput"
                type="text"
                placeholder="Tìm kiếm từ dữ liệu của 1,078,628 khách hàng"
                aria-label="Search"
              />
              <Link to="/admin/guest/searchList">
                <button className="btn searchBarButton"> Tìm kiếm </button>
              </Link>
            </div>
            <div className="col-md-6 filterBar" style={{ display: "flex", justifyContent: "flex-end"}}>
              <div className="form-group" style={{ margin: "0" }}>
                <select className="form-control selectListFilterBar" id="">
                  <option value="guestArea">Khu vực</option>
                  <option value="guestName">Tên khách hàng</option>
                  <option value="guestTotalMoney">Chi phí</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 productMainView">
          <Switch>
            <Route path="/admin/guest/searchList">
              <SearchList />
            </Route>
          </Switch>
        </div>
    </div>
)

export default GuestIndex;