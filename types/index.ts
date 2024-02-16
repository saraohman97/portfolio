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
    text: string;
    imageDescription: string;
    createdAt: Date;
    category: string;
    framework: string;
    database: string;
    schema: string;
    css: string;
    userId: string;
    favorite: boolean;
    images: Image[];
}
export type Image = {
    id: string;
    url: string;
}

export type Project = {
    id: string;
    title: string;
    link: string;
    images: ProjectImage[]
}
export type ProjectImage = {
    id: string;
    url: string;
}