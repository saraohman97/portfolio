"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Post = {
  id: string;
  title: string;
  description: string;
  favorite: boolean;
  createdAt: string;
};

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "favorite",
    header: "Favorite",
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
  },
];
