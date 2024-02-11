"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Post = {
  id: string;
  title: string;
  category: string;
  createdAt: string;
};

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
  },
];
