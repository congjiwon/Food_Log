import React from "react";
import Header from "../components/Main/Header";
import Layout from "../components/Layout";
import Footer from "../components/Main/Footer";
import DetailPage from "../components/Detail/DetailPage";
function Detail() {
  return (
    <>
      <Header />
      <Layout>
        <DetailPage></DetailPage>
      </Layout>
      <Footer />
    </>
  );
}

export default Detail;
