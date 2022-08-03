import React from 'react';
import { MainLayout } from '@layouts';
import { ImageSection, ListItems, PostsSection, StoryListSection, TitleText, WideImageSection } from "@sections";
import { Tags, Text } from "@elements";

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
    }
  ]
}
const Page = () => {
  return (
    <MainLayout>
      <TitleText theme={1}>
        <h1>Comparing Front-end Frameworks: React vs Vue vs Angular</h1>
        <Tags />
      </TitleText>
      <WideImageSection image='https://via.placeholder.com/1920x900/0000FF/808080%20?Text=Digital.com' />
      <TitleText text="The world of technology is a pulsing cycle. You'll have a period of expansion, where new technology is developed, and multiple different spin-offs, iterations, and variations appear until the market seems saturated with options. It becomes challenging to know which to pick. Then, as that technology ages, the expansion begins with the next iteration. Next, as people gain experience using these options and comparing them, some become the clear winners. Some will fold, some will be purchased and rolled into others, and the market consolidates with the most effective options.
      " theme={1}>
        <Text text="We're in the middle of this cycle with development. Right now, there are three clear favorites for the core technology everyone uses for their web app development. Those three are the front-end frameworks of Vue, Angular, and React.
All three of these frameworks are iterations on JavaScript, and they all work in slightly different ways, but they're all compelling and can all be used to make well-functioning apps.
What Are Front-End Frameworks?
You can split an app's functionality between the front-end and back-end in development. Front-end is the stuff a user sees and interacts with - it's your dashboard, newsfeed, user profile, etc. The back end is the server-side databases and infrastructure that hosts and runs the front-end code. Angular, Vue and React are all frameworks for front-end development.
Front-end frameworks are like shortcuts and cheat sheets. You could code up an entire front end in JavaScript, raw. After all, JavaScript, HTML, and CSS combined are present virtually everywhere on the internet." />
      </TitleText>
      <ImageSection image='https://via.placeholder.com/1920x900/0000FF/808080%20?Text=Digital.com' />
      <TitleText theme={1}>
        <Text text="We're in the middle of this cycle with development. Right now, there are three clear favorites for the core technology everyone uses for their web app development. Those three are the front-end frameworks of Vue, Angular, and React.
All three of these frameworks are iterations on JavaScript, and they all work in slightly different ways, but they're all compelling and can all be used to make well-functioning apps.
What Are Front-End Frameworks?
You can split an app's functionality between the front-end and back-end in development. Front-end is the stuff a user sees and interacts with - it's your dashboard, newsfeed, user profile, etc. The back end is the server-side databases and infrastructure that hosts and runs the front-end code. Angular, Vue and React are all frameworks for front-end development.
Front-end frameworks are like shortcuts and cheat sheets. You could code up an entire front end in JavaScript, raw. After all, JavaScript, HTML, and CSS combined are present virtually everywhere on the internet." />
      </TitleText>
      <PostsSection {...posts} />
    </MainLayout>
  );
}

export default Page;