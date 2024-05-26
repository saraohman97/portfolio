import { Project } from "@/types";
import ProjectItem from "./project-item";

interface ProjectsPageProps {
  projects: Project[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  return (
    <div className="flex flex-col items-center gap-10 sm:w-2/3 mx-auto my-10 sm:mt-20 sm:mb-40 p-4">
      <div>
        <div className="text-2xl text-center">Projekt</div>
        <p className="invisible max-md:visible font-extralight">
          Klicka på bilderna för att gå till webbsidan.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
