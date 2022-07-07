import React from 'react';
import { MainLayout } from '@layouts';
import {
  FormSection,
  TitleText,
} from "@sections";
import { Button, Input, Select } from "@elements";

const formElements = <>
  <div>selectors</div>
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
      <TitleText title='Do you have a project in mind? Tell me how I can help.'
                 theme={1} />
      <FormSection title="What are you interested in?" elements={formElements} />
    </MainLayout>
  );
}

export default Page;