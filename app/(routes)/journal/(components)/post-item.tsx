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
    <div className="mb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-light">{post.title}</h2>
        <p className="text-slate-400 text-sm">
          {format(post.createdAt, "PPP", { locale: sv })}
        </p>
      </div>

      <hr className="my-2 " />

      <div className="flex flex-wrap gap-2 mt-4">
        {post.framework && <Badge>{post.framework}</Badge>}
        {post.database && <Badge>{post.database}</Badge>}
        {post.schema && <Badge>{post.schema}</Badge>}
        {post.css && <Badge>{post.css}</Badge>}
        {post.category && <Badge>{post.category}</Badge>}
      </div>

      <div className="my-8">
        {post.description && (
          <p className="font-semibold mb-6">{post.description}</p>
        )}
        <p>{post.text}</p>
      </div>

      <div className="mt-10">
        {post.imageDescription && (
          <p className="text-sm text-slate-400">
            Bild: <span>{post.imageDescription}</span>
          </p>
        )}
        <Image
          src={post.images[0]?.url}
          alt={post.title}
          width={2000}
          height={2000}
          className="w-fit object-cover shadow"
        />
      </div>
    </div>
  );
};

export default PostItem;
