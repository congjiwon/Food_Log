import React from "react";
import Header from "../components/Main/Header";
import Layout from "../components/Layout";
import Footer from "../components/Main/Footer";
import Write from "../components/PostWrite/Write";

function PostWrite() {
  return (
    <>
      <Header />
      <Layout>
        <Write />
      </Layout>
      <Footer />
    </>
  );
}

export default PostWrite;
