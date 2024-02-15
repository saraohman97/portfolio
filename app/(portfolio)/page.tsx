import Footer from "@/components/footer";
import PortfolioForm from "./(components)/portfolio-form";

export default async function Home(){
  return (
    <div>
      <PortfolioForm />
      <Footer />
    </div>
  );
};