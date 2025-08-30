import Heading from "@/components/ui/heading";
import Sidebar from "./(components)/sidebar";
import Footer from "@/components/footer";
import Main from "./(components)/main";

const DocumentationPage = () => {
  return (
    <>
      <div className="p-4 max-w-screen-xl mx-auto">
        <Heading
          title="Dokumentation"
          description="Nya webbsidor, arbetsprocess och tips."
          center={true}
        />
        <div className="flex flex-col-reverse sm:flex-row gap-10 w-full">
          <Main />
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DocumentationPage;
