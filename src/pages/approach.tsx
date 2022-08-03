import React from 'react';
import { MainLayout } from '@layouts';
import { FixedContentImagesSection, ListItems, StoryListSection, TitleText, WideImageSection } from "@sections";

interface listItem {
  title: string;
  text: string;
  image: string;
}

const listItems: listItem[] = [
  {
    title: 'The user is always our first priority',
    text: 'Before building anything, we work to understand the who, what, and why. Who are we building for? What is the problem we’re solving? And why is this the solution they need? Having answers to these questions early in the process allows us to build products that enhance capabilities, bring happiness, and simplify process.',
    image: 'https://via.placeholder.com/365x410/0000FF/808080%20?Text=Digital.com'
  },
  {
    title: 'The user is always our first priority',
    text: 'Before building anything, we work to understand the who, what, and why. Who are we building for? What is the problem we’re solving? And why is this the solution they need? Having answers to these questions early in the process allows us to build products that enhance capabilities, bring happiness, and simplify process.',
    image: 'https://via.placeholder.com/365x410/0000FF/808080%20?Text=Digital.com'
  },
  {
    title: 'The user is always our first priority',
    text: 'Before building anything, we work to understand the who, what, and why. Who are we building for? What is the problem we’re solving? And why is this the solution they need? Having answers to these questions early in the process allows us to build products that enhance capabilities, bring happiness, and simplify process.',
    image: 'https://via.placeholder.com/365x410/0000FF/808080%20?Text=Digital.com'
  }
];

const Page = () => {
  return (
    <MainLayout>
      <div className="wrapper">
        <h1>Simple rules for building products that customers love.</h1>
        <p>
          Building good products isn’t magic: it’s all about listening to your customers, working iteratively, and
          testing constantly. Short cycles and regular feedback keeps our minds open to changing directions and
          experimenting every step of the way.
        </p>
        <p>
          The right product is the one created with your and your customers’ goal in mind; we’re here as the experienced
          team that has the tools and processes necessary to do the work and get results.
        </p>
      </div>
      <WideImageSection image='https://via.placeholder.com/1920x900/0000FF/808080%20?Text=Digital.com' />
      <ListItems title='Three basic rules when building better products.' items={listItems} />
      <FixedContentImagesSection title='Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.'
                                 text='Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum' />
    </MainLayout>
  );
}

export default Page;