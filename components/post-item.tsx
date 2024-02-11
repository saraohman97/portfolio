"use client";

import { Post } from "@prisma/client";
import Image from "next/image";

interface PostItemProps {
  data: Post;
}

const PostItem: React.FC<PostItemProps> = ({ data }) => {
  return (
    <div className="cursor-pointer group col-span-1">
      <div className="text-lg font-semibold">{data.title}</div>
      <div>{data.description}</div>
      <div className="aspect-square w-full relative overflow-hidden rounded-xl">
        <Image
          alt="post"
          fill
          src={data.imageSrc}
          className="object-cover h-full w-full group-hover:scale-110 transition"
        />
      </div>
    </div>
  );
};

export default PostItem;
