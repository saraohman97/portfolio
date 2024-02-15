import CategoriesClient from "./(components)/client";
import getCategories from "@/actions/getCategories";
import { Category } from "./(components)/columns";
import { format } from "date-fns";

const CategoriesPage = async () => {
  const data = await getCategories();

  const formattedData: Category[] = data.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return <CategoriesClient data={formattedData} />;
};

export default CategoriesPage;
