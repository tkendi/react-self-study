import React from "react";
import Layout from "../components/layout";

const Search = ({ url }) => {
  return <Layout>your searching keyword is {url.query.keyword}</Layout>;
};

export default Search;
