import React, { createContext } from "react";
import Header from "../Header/Header";

export const MenuContext = createContext();

const Layout = () => {
  const menus = ["Trang chủ", "Tin tức", "Giới thiệu", "Liên hệ"];
  return (
    <>
      <MenuContext.Provider value={menus}>
        <Header/>
      </MenuContext.Provider>
      <div>Main</div>
      <div>Footer</div>
    </>
  );
};

export default Layout;
