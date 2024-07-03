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
    header: "Titel",
  },
  {
    accessorKey: "link",
    header: "Länk",
  },
  {
    accessorKey: "createdAt",
    header: "Skapad",
  },
];
