import getCategories from "@/actions/getCategories";
import New from "./client";

const NewPost = async () => {
  const categories = await getCategories()

  return ( 
    <New categories={categories} />
   );
}
 
export default NewPost;