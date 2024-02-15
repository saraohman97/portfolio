import { Post } from "@/types";
import { format } from "date-fns";
import Image from "next/image";
import { sv } from "date-fns/locale";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="mb-24">
      <h2 className="text-4xl">{post.title}</h2>
      <div className="flex items-center justify-between">
        <p className="text-slate-400 text-sm my-2">{post.description}</p>
        <p className="text-slate-400 text-sm">
          {format(post.createdAt, "PPP", { locale: sv })}
        </p>
      </div>
      {/* collection */}
      <div className="space-x-2 mt-4">
        badges
      </div>
      <hr className="mt-5 mb-10" />
      {/* {article.preText && ( */}
        <p className="font-semibold mb-4">preText</p>
      {/* )} */}
      <p>text</p>

      <p className="pt-10 pl-10 text-sm text-slate-400">
        Bild: <span>image description</span>
      </p>
      <Image
        src={post.images[0]?.url}
        alt={post.title}
        width={400}
        height={400}
        className="w-auto h-full object-contain m-10 mt-0 shadow"
      />
    </div>
  );
};

export default PostItem;
