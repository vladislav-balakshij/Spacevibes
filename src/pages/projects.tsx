import React from 'react';
import { MainLayout } from '@layouts';
import { ProjectsSection } from "@sections";

const project = [{}, {}, {}, {}];

const ProjectsPage = () => {
  return (
    <MainLayout>
      <ProjectsSection filter={true} projects={project} />
    </MainLayout>
  );
}

export default ProjectsPage;