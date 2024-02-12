import prisma from '@/lib/prismadb'

export interface IPostsParams {
    category?: string;
}

export default async function getPosts(
    params: IPostsParams
) {
    const { category } = params;

    let query: any = {};

    if (category) {
        query.category = category;
    }

    try {
        const posts = await prisma.post.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc'
            }
        })

        return posts;
    } catch (error: any) {
        throw new Error(error);
    }
}