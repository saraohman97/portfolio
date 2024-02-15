import { Post } from "@prisma/client";
import PostItem from "./post-item";

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
      <div className="w-2/3">
        {posts.length ? (
          <>
            {posts.map((post: any) => {
              return <PostItem key={post.id} post={post} />;
            })}
          </>
        ) : (
          <div>No posts with this category</div>
        )}
      </div>
  );
};

export default Posts;
