import prisma from '../../plugins/prisma'

async function deleteTable() {
    const deletetable = await prisma.$executeRaw`DELETE TABLE sample`

    return deletetable
}

deleteTable()