import React, { Fragment } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />

      {children}

      <Footer />
    </Fragment>
  );
};

export default Layout;
