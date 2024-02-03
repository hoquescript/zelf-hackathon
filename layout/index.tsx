import React, { Fragment } from "react";
import Header from "./header/Header.layout";
import Footer from "./footer/Footer.layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
