import Footer from "@/components/footer";
import Hero from "@/app/(routes)/(portfolio)/(components)/hero"
import getProjects from "@/actions/getProjects";
import ProjectsPage from "./(components)/projects-section";
import SEOSection from "@/app/(routes)/(portfolio)/(components)/seo-section"
import SkillsSection from "./(components)/skills-section";
import WebsitesSection from "./(components)/websites-section";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Hero />
      <SkillsSection />
      <SEOSection />
      {/* <WebsitesSection /> */}
      {projects.length ? <ProjectsPage projects={projects} /> : ""}
      <Footer />
    </>
  );
}
