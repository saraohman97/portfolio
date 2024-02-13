import { User } from "@prisma/client";

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}

export type Post = {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    category: string;
    userId: string;
    images: Image[];
}

export type Image = {
    id: string;
    url: string;
}