const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

async function createContent() {
    const users = await prisma.users.findMany()
}

createContent()