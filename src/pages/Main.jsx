import React from "react";
import Header from "../components/Main/Header";
import Layout from "../components/Layout";
import Body from "../components/Main/Body";
import Footer from "../components/Main/Footer";
import TopButton from "../components/feature/TopButton";

function Main() {
  return (
    <>
      <Header />
      {/* <Layout> */}
      <Body />
      {/* </Layout> */}
      <TopButton />
      <Footer />
    </>
  );
}

export default Main;
