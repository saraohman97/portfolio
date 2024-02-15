import PostsClient from "./(components)/client";
import getDashboardPosts from '@/actions/getDashboardPosts'
import { Post } from "./(components)/columns";
import { format } from "date-fns";


const JournalPage = async () => {
  const data = await getDashboardPosts();

  const formattedData: Post[] = data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    favorite: item.favorite,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
      <PostsClient data={formattedData} />
  );
};

export default JournalPage;
