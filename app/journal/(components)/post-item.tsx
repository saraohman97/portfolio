import { Post } from "@/types";
import { format } from "date-fns";
import Image from "next/image";
import { sv } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="mb-24">
      <div className="flex max-sm:flex-col items-center justify-between">
        <h2 className="text-2xl sm:text-4xl">{post.title}</h2>
        <p className="text-slate-400 text-sm">
          {format(post.createdAt, "PPP", { locale: sv })}
        </p>
      </div>
      <hr className="my-5 " />

      {/* collection */}
      <div className="flex flex-wrap gap-2 my-4">
        {post.framework && <Badge>{post.framework}</Badge>}
        {post.database && <Badge>{post.database}</Badge>}
        {post.schema && <Badge>{post.schema}</Badge>}
        {post.css && <Badge>{post.css}</Badge>}
        {post.category && <Badge>{post.category}</Badge>}
      </div>

      {post.description && (
        <p className="font-semibold mb-4">{post.description}</p>
      )}
      <p>{post.text}</p>

      {post.imageDescription && (
        <p className="pt-10 pl-10 text-sm text-slate-400">
          Bild: <span>{post.imageDescription}</span>
        </p>
      )}
      <Image
        src={post.images[0]?.url}
        alt={post.title}
        width={400}
        height={400}
        className="w-full max-h-96 object-cover sm:m-10 sm:mt-0 shadow"
      />
    </div>
  );
};

export default PostItem;
