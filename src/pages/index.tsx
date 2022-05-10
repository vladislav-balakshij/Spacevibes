import React from 'react';
// @ts-ignore
import MainLayout from '@layouts/mainLayout';
import Heading from "../views/elements/typography";

const IndexPage = () => {
  return (
    <MainLayout>
      <Heading level={1}>H1 I design better digital products to help my clients build better customer experiences.</Heading>
      <Heading level={2}>H2 I design better digital products to help my clients build better customer experiences.</Heading>
      <Heading level={3}>H3 I design better digital products to help my clients build better customer experiences.</Heading>
      <Heading level={4}>H4 I design better digital products to help my clients build better customer experiences.</Heading>
      <Heading level={5}>h5 I design better digital products to help my clients build better customer experiences.</Heading>
    </MainLayout>
  );
}

export default IndexPage;