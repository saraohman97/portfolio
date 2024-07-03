import { Project as ProjectType } from "@/types";
import Project from "./project";

interface ProjectsSectionProps {
  projects: ProjectType[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div className="flex flex-col items-center gap-10 sm:w-2/3 mx-auto my-32 p-4">
      <div>
        <div className="font-bold text-xl text-center">Mer projekt</div>
        <p className="font-extralight text-center">Dessa är några projekt som jag har gjort</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-10">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
