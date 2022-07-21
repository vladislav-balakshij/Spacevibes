import React from 'react';
import { MainLayout } from '@layouts';
import {
  ImageSection,
  SliderSection,
  TitleButton, TitleImagesGridSection,
  TitleText,
  ProjectsSection,
  WideImageSection
} from "@sections";
import { Button } from "@elements";

const slider = {
  title: 'Inspirational vibes',
  description: 'Ideas and concepts shared across social media',
  posts: [{}, {}, {}, {}, {}]
}

const Page = () => {
  return (
    <MainLayout>
      <div className="wrapper">
        <h1>I build custom digital products for companies like Deloitte, Health Ontario, and TD Trust.</h1>
        <p>Clients come to us when they have a great idea, but need a team of seasoned experts to help them bring it to
          life. Over the years, we’ve worked with clients like Buzzfeed, General Electric, and Hermès to concept and
          build everything from websites and apps to interactive event installations. Whether you’re a new startup or a
          Fortune 500 company, our team of designers, developers, and product experts will treat you with the same level
          of respect and care that we’ve given all of our clients since 2013.</p>
        <h4>Have an idea?</h4>
        <Button>Tell us about it</Button>
      </div>

      <WideImageSection image='https://via.placeholder.com/1920x900/0000FF/808080%20?Text=Digital.com' />
      <TitleText title='My goal'
                 text='From the moment our company was founded, we have helped our clients find exceptional solutions for their businesses , creating memorable brands and digital products. Our expertise grows with each year, and our accumulated experience empowers us to develop products exactly as they should be.'
      />
      <ProjectsSection />
      <TitleText title='Simply put, we dare what others dont'
                 text=" We make things, and were awesome at it . Cuberto is a tight-knit team of experts who are ready
      to tackle the most intricate puzzles when it comes to websites and mobile apps development. We love what we do and
      we bet on the success of each and every project we undertake.

      Mainstream? No, thanks. Because it s not just work, it s passion . It's not just clients, it's people. Every
      project we take on is important to us, and every client is a big deal. We take care of your projects, your
      deadlines, and your nerves no matter what, and that’s a promise.
      "
                 theme={1}
      />
      <ImageSection image='https://via.placeholder.com/1920x900/0000FF/808080%20?Text=Digital.com' />
      <TitleImagesGridSection title='I work with companies
to build digital products that people use. ' />
      <TitleText title='Feedback from my clients'
                 text='From the moment our company was founded, we have helped our clients find exceptional solutions for their businesses , creating memorable brands and digital products. Our expertise grows with each year, and our accumulated experience empowers us to develop products exactly as they should be.'
      />
      <ProjectsSection />
      <TitleText title="Get to know me,
see what's up"
                 text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                 theme={1} />
      <SliderSection {...slider} />
    </MainLayout>
  );
}

export default Page;