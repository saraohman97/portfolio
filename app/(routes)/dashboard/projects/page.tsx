import { ProjectColumn } from "./(components)/columns";
import { format } from "date-fns";
import getDashboardProjects from "@/actions/getDashboardProjects";
import ProjectsClient from "./(components)/client";

const ProjectsPage = async () => {
  const data = await getDashboardProjects();

  const formattedData: ProjectColumn[] = data.map((item) => ({
    id: item.id,
    title: item.title,
    link: item.link,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return <ProjectsClient data={formattedData} />;
};

export default ProjectsPage;
