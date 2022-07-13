import React from 'react';
import { MainLayout } from '@layouts';
import { HeroSection, FeaturedProjectsSection, PostsSection, SliderSection } from "@sections";

const posts = {
  title: 'Insights & Resources',
  description: 'I regularly  publish articles and tutorials on design principles, UI UX design tools and industry best practices',
  link: '/',
  posts: [{
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
    }]
}

const slider = {
  title: 'Inspirational vibes',
  description: 'Ideas and concepts shared across scoial media',
  posts: [{}, {}, {}, {}, {}]
}

const featuredProjects = {
  projects: [
    {
      name: 'Mckesson Canada',
      title: 'Canada’s leading pharmaceutical brand',
      keywords: 'web application, user interface, design, ux',
      img: 'https://via.placeholder.com/550x780/0000FF/808080%20?Text=Digital.com'
    },
    {
      name: 'Mckesson Canada',
      title: 'Canada’s leading pharmaceutical brand',
      keywords: 'web application, user interface, design, ux',
      img: 'https://via.placeholder.com/550x780/0000FF/808080%20?Text=Digital.com'
    },
    {
      name: 'Mckesson Canada',
      title: 'Canada’s leading pharmaceutical brand',
      keywords: 'web application, user interface, design, ux',
      img: 'https://via.placeholder.com/550x780/0000FF/808080%20?Text=Digital.com'
    }
  ]
}

const Page = () => {
  return (
    <MainLayout>
      <HeroSection />
      {/*<FeaturedProjectsSection {...featuredProjects} />*/}
      <PostsSection {...posts} />
      <SliderSection {...slider} />
    </MainLayout>
  );
}

export default Page;