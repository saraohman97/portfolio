import Footer from "@/components/footer";
import Portfolio from "./(components)/portfolio";
import getProjects from "@/actions/getProjects";
import ProjectsPage from "./(components)/projects";

export default async function Home(){
  const projects = await getProjects()

  return (
    <>
      <Portfolio />
      {projects.length ? (
        <ProjectsPage projects={projects} />
      ) : ''}
      <Footer />
    </>
  );
};