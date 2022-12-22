const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function createTable() {
    const newUser = await prisma.users.create({
        data: {
            first_name: 'bippity',
            username: 'bettyboop',
            password: '987456321',
            email: 'bippitybop@unknown.com',
        },
    })

    const users = await prisma.$queryRaw`SELECT * FROM users`

    return {newUser, users}
}

createTable()