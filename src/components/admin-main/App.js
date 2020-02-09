import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Components
import {
  sidebarMenuTop as SidebarMenuTop,
  sidebarMenuBottom as SidebarMenuBottom
} from "./SidebarMenu";
import LoginIndex from "../admin-login/Index";
import OverviewIndex from "../admin-overview/Index";
import StoreIndex from "../admin-store/Index";
import GuestIndex from "../admin-guest/Index";
import ProductIndex from "../admin-product/Index";
import SettingIndex from "../admin-setting/Index";
import HelpIndex from "../admin-help/Index";
import NotFound from "../admin-main/NotFound";

// Import Datas
import {sidebarMenuLink as dataNav} from "../../datatest/adminData"

export function App() {
  return (
    <div className="row structurePage">
      {/* NAV SIDEBAR OF ADMIN */}
      <div className="col-md-2 navSidebar">
        {/* Nav sidebar on top */}
        <div className="row navSidebarTop">
          <div className="col-md-12 sidebarProfile">
            <img
              className="sidebarAvatar"
              src="/img/main/sidebarAvatar.png"
              alt="Admin Avatar"
            />
            <p className="sidebarName"> Tôm Ho Lần </p>
          </div>
          <SidebarMenuTop sidebar={dataNav} />
        </div>
        {/* Nav sidebar on bottom */}
        <div className="row navSidebarBottom">
          <SidebarMenuBottom sidebar={dataNav} />
        </div>
      </div>

      {/* CONTENT EACH PAGE */}
      <div className="col-md-10 adminEachPage">
        <Switch>
          <Route path="/admin/overview" component={OverviewIndex} />
          <Route path="/admin/store" component={StoreIndex} />
          <Route path="/admin/guest" component={GuestIndex} />
          <Route path="/admin/product" component={ProductIndex} />
          <Route path="/admin/setting" component={SettingIndex} />
          <Route path="/admin/help" component={HelpIndex} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}
