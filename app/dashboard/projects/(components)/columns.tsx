"use client";

import { ColumnDef } from "@tanstack/react-table";

export type ProjectColumn = {
  id: string;
  title: string;
  link: string;
  createdAt: string;
};

export const columns: ColumnDef<ProjectColumn>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "link",
    header: "Link",
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
  },
];
