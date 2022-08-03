import React from 'react';
import { MainLayout } from '@layouts';
import {
  FormSection,
  TitleText,
} from "@sections";
import { Button, Input, Select } from "@elements";

const formElements = <>
  <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
    <Input type='checkbox' placeholder='App Designt' />
    <Input type='checkbox' placeholder='App Designt' />
    <Input type='checkbox' placeholder='App Designt' />
    <Input type='checkbox' placeholder='App Designt' />
    <Input type='checkbox' placeholder='App Designt' />
  </div>
  <div>
    <Input placeholder='Your name' />
    <Input placeholder='Your email' />
    <Input placeholder='Tell me about your project' />
    <Select />
    <Input type='file' placeholder='Add attachment' />
    <Button>Send request</Button>
  </div>
</>

const Page = () => {
  return (
    <MainLayout>
      <TitleText>
        <h1>Do you have a project in mind? Tell me how I can help.</h1>
      </TitleText>
      <FormSection title="What are you interested in?" elements={formElements} />
    </MainLayout>
  );
}

export default Page;