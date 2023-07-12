import React from "react";
import Header from "../components/Main/Header";
import Layout from "../components/Layout";
import Footer from "../components/Main/Footer";
import Edit from "../components/PostWrite/Edit";
function EditPage() {
  return (
    <>
      <Header />
      <Layout>
        <Edit />
      </Layout>
      <Footer />
    </>
  );
}

export default EditPage;
