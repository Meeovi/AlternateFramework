const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

async function createContent() {
    prisma.$queryRaw`SELECT * FROM Customers o WHERE  o.customer_id IN (${Prisma.join(sub_users)}) `;
}

export default createContent()