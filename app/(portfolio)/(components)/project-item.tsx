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
        className="relative group cursor-pointer rounded"
      >
        <Image
          src={project.images[0].url}
          className="w-full shadow-xl max-h-[400px] object-cover rounded"
          width={400}
          height={400}
          alt={project.title}
        />

        <div className="invisible inset-0 flex flex-col items-center justify-center gap-3 absolute group-hover:visible group-hover:bg-slate-900/80 text-white text-sm rounded">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p><span className="underline bg-blue-200 py-1 px-3 rounded text-black">Gå till webbsidan!</span></p>
        </div>
      </a>
  );
};

export default ProjectItem;
