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
        category,
        imageSrc
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
            category,
            imageSrc,
            userId: currentUser.id
        }
    })

    return NextResponse.json(post)
}