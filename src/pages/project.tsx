import React from 'react';
import { MainLayout } from '@layouts';
import {
  LabelTitleSection,
  TitleText,
  WideImageSection,
  FixedContentImagesSection,
  AnimatedImageSection,
  TitleButton
} from "@sections";


const Page = () => {
  return (
    <MainLayout>
      <LabelTitleSection label='McKesson Canada' title='An enterprise application for McKesson Canada' />
      <WideImageSection image='https://via.placeholder.com/1920x900/0000FF/808080%20?Text=Digital.com' />
      <TitleText
        title='Project Overview'
        text='Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.' />

      <WideImageSection image='https://via.placeholder.com/1920x900/0000FF/808080%20?Text=Digital.com' />
      <TitleText title='Problem Statement'
                 text='Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. ' />
      <WideImageSection image='https://via.placeholder.com/1920x900/0000FF/808080%20?Text=Digital.com' />
      <FixedContentImagesSection title='Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.'
                          text='Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum' />
      <AnimatedImageSection title='Any mechanical keyboard enthusiasts in design.'
                     background={'https://images.unsplash.com/photo-1655452591846-a182bd329835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}
                     gif={'https://media4.giphy.com/media/PiuL0MyzhlQv9fkNrY/giphy.gif?cid=ecf05e47iu8551crcp03ix0ifnzwnow7t5vqbdvzes3umr6k&rid=giphy.gif&ct=g'} />
      <TitleText title='Problem Statement'
                 text='Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. ' />

      <WideImageSection image='https://via.placeholder.com/1920x900/0000FF/808080%20?Text=Digital.com' />
      <FixedContentImagesSection title='Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.'
                          text='Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum'
                          reverse={true}
      />
      <TitleButton title='The Walt Disney Company' />
    </MainLayout>
  );
}

export default Page;