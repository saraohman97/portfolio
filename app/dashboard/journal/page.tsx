import PostsClient from "./(components)/client";
import getDashboardPosts from '@/actions/getDashboardPosts'
import { Post } from "./(components)/columns";
import { format } from "date-fns";


const JournalPage = async () => {
  const data = await getDashboardPosts();

  const formattedData: Post[] = data.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    framework: item.framework,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div>
      <PostsClient data={formattedData} />
    </div>
  );
};

export default JournalPage;
