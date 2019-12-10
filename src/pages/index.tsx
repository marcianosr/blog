import * as React from "react";

// import { Link } from "gatsby"

import Layout from "../components/layout/Layout";
import Categories from "../components/categories/Categories";
import Test from "./test";
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Categories />
    <Test title="hi" />
  </Layout>
);

export default IndexPage;
