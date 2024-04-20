import React, { useState } from "react";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();
  const searchByKeyword = (e) => {
    e.preventDefault();
    navigate(`/recipe?q=${keyword ? keyword : "popular"}`);
    setKeyword("");
  };
  return (
    <>
      <Header
        keyword={keyword}
        setKeyword={setKeyword}
        searchByKeyword={searchByKeyword}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
