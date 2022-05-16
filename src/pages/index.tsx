import React from 'react';
// @ts-ignore
import MainLayout from '@layouts/mainLayout';
import Button from "../views/elements/buttons/buttons";
import TwoColorsTitle from "../views/elements/twoColorsTitle/twoColorsTitle";

const IndexPage = () => {
  return (
    <MainLayout>
      <h1>H1 I design better digital products to help my clients build better customer experiences.</h1>
      <h2>H2 I design better digital products to help my clients build better customer experiences.</h2>
      <h3>H3 I design better digital products to help my clients build better customer experiences.</h3>
      <h4>H4 I design better digital products to help my clients build better customer experiences.</h4>
      <h5>h5 I design better digital products to help my clients build better customer experiences.</h5>
      <div className="overline">Toronto based. Human-centric designs.</div>
      <p>I work with financial institutions, government ministries, and health industry to conceptualize and design custom digital products, websites and apps.</p>
      <Button>My approach</Button>
      <TwoColorsTitle first={'featured'} second={'projects'}/>
    </MainLayout>
  );
}

export default IndexPage;