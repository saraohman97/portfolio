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
        label
    } = body;

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error();
        }
    })

    const category = await prisma.category.create({
        data: {
            label,
            userId: currentUser.id
        }
    })

    return NextResponse.json(category)
}