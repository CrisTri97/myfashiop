import React, { Children } from "react";
import Footer from "../components/Footer/Footer";
import NavContact from "../components/NavContact/NavContact";
import NavMenu from "../components/NavMenu/NavMenu";

export default function Layout({ children }) {
  return (
    <>
      <NavContact />

      {children}
      {/* <Footer /> */}
    </>
  );
}
