import React from 'react';
// @ts-ignore
import { MainLayout } from '@layouts/mainLayout';

import HeroSection from "../views/sections/hero";
import FeaturedProjectsSection from "../views/sections/featured";
import PostsSection from "../views/sections/posts";
import SliderSection from "../views/sections/slider";

const posts = [
  {
    id: 1,
    img: 'img',
    title: 'Collector Pumpkin Festival cancelled indefinitely',
    url: 'http://localhost:8080'
  },
  {
    id: 2,
    img: 'img',
    title: 'Collector Pumpkin Festival cancelled indefinitely',
    url: 'http://localhost:8080'
  },
  {
    id: 3,
    img: 'img',
    title: 'Collector Pumpkin Festival cancelled indefinitely',
    url: 'http://localhost:8080'
  }
]
const IndexPage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedProjectsSection />
      <PostsSection
        title="Insights & Resources"
        description="I regularly  publish articles and tutorials on design principles, UI UX design tools and industry best practices "
        posts={posts}
      />
      <SliderSection
        title='Inspirational vibes'
        description='Ideas and concepts shared across scoial media'
      />


      {/*<h2>H2 I design better digital products to help my clients build better customer experiences.</h2>*/}
      {/*<h3>H3 I design better digital products to help my clients build better customer experiences.</h3>*/}
      {/*<h4>Canada’s leading pharmaceutical brand</h4>*/}
      {/*<h5>Mckesson Canada</h5>*/}
    </MainLayout>
  );
}

export default IndexPage;