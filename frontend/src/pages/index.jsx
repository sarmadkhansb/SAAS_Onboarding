import React from "react";
import SEO from "../common/seo";
// import HomeOne from "../components/homes/home";
import HomeFive from "../components/homes/home-5";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Portal - Website"} />  {/* changed page title */}
      <HomeFive />
    </Wrapper>
  );
};

export default Home;
