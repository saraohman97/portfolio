"use client";

import Image from "next/image";
import { Badge } from "./ui/badge";
import { Post } from "@/types";

interface PostItemProps {
  data: Post;
}

const PostItem: React.FC<PostItemProps> = ({ data }) => {
  return (
    <div className="cursor-pointer group col-span-1">
      <div className="text-lg font-semibold">{data.title}</div>
      <div>{data.description}</div>
      {data.category && (<Badge>{data.category}</Badge>)}
      {data.framework && (<Badge>{data.framework}</Badge>)}
      <div className="aspect-square w-full relative overflow-hidden rounded-xl">
        <Image
          alt="post"
          fill
          src={data.images[0]?.url}
          className="object-cover h-full w-full group-hover:scale-110 transition"
        />
      </div>
    </div>
  );
};

export default PostItem;
