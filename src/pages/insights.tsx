import React from 'react';
import { MainLayout } from '@layouts';
import { ListItems, PostsSection, StoryListSection, TitleText, WideImageSection } from "@sections";

const posts = {
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
    },
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
    },
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
}
const Page = () => {
  return (
    <MainLayout>
      <TitleText>
        <h1>Insights on technology and digital product design</h1>
      </TitleText>
      <PostsSection {...posts} />
    </MainLayout>
  );
}

export default Page;