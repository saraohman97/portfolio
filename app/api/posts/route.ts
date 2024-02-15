import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(
    request: Request
) {
    const currentUser = await getCurrentUser();

    if (!currentUser) return NextResponse.error();

    const body = await request.json();

    const {
        title,
        description,
        text,
        imageDescription,
        images,
        category,
        framework,
        database,
        schema,
        css,
        favorite
    } = body;

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error();
        }
    })

    const post = await prisma.post.create({
        data: {
            title,
            description,
            text,
            imageDescription,
            category,
            framework,
            database,
            schema,
            css,
            favorite,
            images: {
                createMany: {
                  data: [
                    ...images.map((image: { url: string }) => image),
                  ],
                },
            },
            userId: currentUser.id
        }
    })

    return NextResponse.json(post)
}