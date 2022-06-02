import React from 'react';
import { MainLayout } from '@layouts';
import { HeroSection, FeaturedProjectsSection, PostsSection, SliderSection } from "@sections";

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

const vibes = [{}, {}, {}, {}, {}]

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
        posts={vibes}
      />
    </MainLayout>
  );
}

export default IndexPage;