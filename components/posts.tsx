import { Post } from "@prisma/client";
import PostItem from "./post-item";

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <div>
      {posts.length ? (
        <div className="grid grid-cols-2 gap-2">
          {posts.map((post: any) => {
            return <PostItem key={post.id} data={post} />;
          })}
        </div>
      ) : (
        <div>No posts with this category</div>
      )}
    </div>
  );
};

export default Posts;
