"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Category = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "label",
    header: "Etikett",
  },
  {
    accessorKey: "createdAt",
    header: "Skapad",
  },
];
