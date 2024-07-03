import { Project as ProjectType } from "@/types";
import Image from "next/image";

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <a
      href={`https://${project.link}`}
      target="_blank"
    >
      <Image
        src={project.images[0].url}
        className="w-full max-h-[400px] object-cover rounded"
        width={400}
        height={400}
        alt={project.title}
      />
    </a>
  );
};

export default Project;
