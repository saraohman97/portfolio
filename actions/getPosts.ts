import prisma from '@/lib/prismadb'

export interface IPostsParams {
    category?: string;
    framework?: string;
    database?: string;
    schema?: string;
    css?: string;
}

export default async function getPosts(
    params: IPostsParams
) {
    const { category, framework, database, schema, css } = params;

    let query: any = {};

    if (category) {
        query.category = category;
    }

    if (framework) {
        query.framework = framework;
    }

    if (database) {
        query.database = database;
    }

    if (schema) {
        query.schema = schema;
    }

    if (css) {
        query.css = css;
    }

    try {
        const posts = await prisma.post.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                images: true
            }
        })

        return posts;
    } catch (error: any) {
        throw new Error(error);
    }
}