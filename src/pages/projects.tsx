import React from 'react';
import { MainLayout } from '@layouts';
import { ProjectsSection } from "@sections";

const project = [{}, {}, {}, {}];

const Page = () => {
  return (
    <MainLayout>
      <ProjectsSection filter={true} projects={project} />
    </MainLayout>
  );
}

export default Page;