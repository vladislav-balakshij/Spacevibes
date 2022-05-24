import React from 'react';
// @ts-ignore
import { MainLayout } from '@layouts/mainLayout';
import Button from "../views/elements/buttons/buttons";
import TwoColorsTitle from "../views/elements/twoColorsTitle/twoColorsTitle";
import HeroSection from "../views/sections/hero";
import FeaturedProjectsSection from "../views/sections/featured";

const IndexPage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedProjectsSection />


      {/*<h2>H2 I design better digital products to help my clients build better customer experiences.</h2>*/}
      {/*<h3>H3 I design better digital products to help my clients build better customer experiences.</h3>*/}
      {/*<h4>Canada’s leading pharmaceutical brand</h4>*/}
      {/*<h5>Mckesson Canada</h5>*/}
    </MainLayout>
  );
}

export default IndexPage;