import prisma from '../../plugins/prisma'

async function createTable() {
    const atable = await prisma.$queryRaw`CREATE TABLE sample`

    return atable
}

createTable()