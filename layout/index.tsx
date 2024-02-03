import React, { Fragment, useEffect } from "react";
import Header from "./header/Header.layout";
import Footer from "./footer/Footer.layout";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const router = useRouter();
  // Due to time pressure couldnt complete login in a better way
  useEffect(() => {
    console.log(user, router.pathname);
    if (!user && router.pathname === "/") {
      // router.push("/login");
    }
  }, [router, user]);
  return (
    <Fragment>
      <Header />
      <main className="container">{children}</main>
      {user ? <Footer /> : null}
    </Fragment>
  );
};

export default Layout;
