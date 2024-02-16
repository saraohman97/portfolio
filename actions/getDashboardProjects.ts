import prisma from '@/lib/prismadb'

export default async function getProjects() {

    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return projects;
    } catch (error: any) {
        throw new Error(error);
    }
}