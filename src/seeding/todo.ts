import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const tasks = [
        "Task 1",
        "Task 2",
        "Task 3",
    ]

    await Promise.all(
        tasks.map(async (task) => {
            await prisma.task.create({
                data: {
                    title: task,
                },
            });
        })
    );
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1)
    })