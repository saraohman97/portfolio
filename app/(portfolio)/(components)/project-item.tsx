import { Button } from "@/components/ui/button";
import { Project } from "@/types";
import Image from "next/image";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
      <a
        href={`https://${project.link}`}
        target="_blank"
        className="relative group cursor-pointer"
      >
        <Image
          src={project.images[0].url}
          className="w-full group-hover:blur-sm shadow-xl max-h-[400px] object-cover"
          width={400}
          height={400}
          alt={project.title}
        />
        <div className="invisible inset-0 flex items-center justify-center absolute group-hover:visible">
          <Button>Gå till webbsidan</Button>
        </div>
      </a>
  );
};

export default ProjectItem;
