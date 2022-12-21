import { prisma, Prisma } from '@prisma/client'

const where = Prisma.sql`where column = ${condition}`

const result = await prisma.$queryRaw`SELECT column FROM table ${condition ? where : Prisma.empty}`