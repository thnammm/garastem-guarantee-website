import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import window from 'global';

// Import Components
import { sidebarMenuTop as SidebarMenuTop, sidebarMenuBottom as SidebarMenuBottom } from "./sidebarMenu";
import LoginIndex from "../admin-login/Index";
import OverviewIndex from "../admin-overview/Index";
import StoreIndex from "../admin-store/Index";
import GuestIndex from "../admin-guest/Index";
import ProductIndex from "../admin-product/Index";
import SettingIndex from "../admin-setting/Index";
import HelpIndex from "../admin-help/Index";

const sidebarMenuLink = {
  id: [0, 1, 2, 3, 4, 5, 6],
  image: [
    "/img/main/sidebarMenu-Overview.png",
    "/img/main/sidebarMenu-Store.png",
    "/img/main/sidebarMenu-Guest.png",
    "/img/main/sidebarMenu-Product.png",
    "/img/main/sidebarMenu-Setting.png",
    "/img/main/sidebarMenu-Help.png",
    "/img/main/sidebarMenu-Logout.png"
  ],
  name: ["Thống kê", "Cửa hàng", "Khách hàng", "Sản phẩm", "Cài đặt", "Trợ giúp", "Đăng xuất"],
  link: ["/overview", "/store", "/guest", "/product", "/setting", "/help", "/logout"]
}

export function App() {
  

  function getPage() {
    const route = window.location.pathname;
    if (route === "/overview") return <OverviewIndex />;
    if (route === "/store") return <StoreIndex />;
    if (route === "/guest") return <GuestIndex />;
    if (route === "/product") return <ProductIndex />;
    if (route === "/setting") return <SettingIndex />;
    if (route === "/help") return <HelpIndex />;
    // if (route === "/logout") return <LogoutIndex />;
  }

  return (
    <div className="row structurePage">

      {/* NAV SIDEBAR OF ADMIN */}
      <div className="col-md-2 navSidebar">
        {/* Nav sidebar on top */}
        <div className="row navSidebarTop">
          <div className="col-md-12 sidebarProfile">
            <img className="sidebarAvatar" src="/img/main/sidebarAvatar.png" alt="Admin Avatar" />
            <p className="sidebarName"> Tôm Ho Lần </p>
          </div>
          <SidebarMenuTop sidebar={sidebarMenuLink} />
        </div>
        {/* Nav sidebar on bottom */}
        <div className="row navSidebarBottom">
          <SidebarMenuBottom sidebar={sidebarMenuLink} />
        </div>
      </div>

      {/* CONTENT EACH PAGE */}
      <div className="col-md-10 adminEachPage">
        {getPage()}
      </div>
    </div>
  );
}
