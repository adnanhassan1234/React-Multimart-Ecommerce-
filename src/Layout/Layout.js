import React from "react";
import Header from "../Components/Header/Header";
import Router from "../Router/Router";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="routers" style={{ padding: "68px 0px 0px 0px" }}>
        <Router />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
