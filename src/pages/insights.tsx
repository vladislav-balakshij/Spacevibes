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
      <TitleText title='Insights on technology and digital product design' text='' theme={1} />
      <PostsSection {...posts} />
    </MainLayout>
  );
}

export default Page;