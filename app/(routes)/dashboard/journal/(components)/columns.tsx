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
    header: "Titel",
  },
  {
    accessorKey: "description",
    header: "Beskrivning",
  },
  {
    accessorKey: "favorite",
    header: "Favorit",
  },
  {
    accessorKey: "createdAt",
    header: "Skapad",
  },
];
