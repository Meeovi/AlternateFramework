const prisma = require('../../plugins/prisma');

async function createContent() {
    prisma.$queryRaw`SELECT * FROM Customers o WHERE  o.customer_id IN (${prisma.join(sub_users)}) `;
}

export default createContent()