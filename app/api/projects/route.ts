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
        link,
        images
    } = body;

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error();
        }
    })

    const project = await prisma.project.create({
        data: {
            title,
            link,
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

    return NextResponse.json(project)
}