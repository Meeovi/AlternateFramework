import { usePrisma } from '@sidebase/nuxt-prisma'
//import { tableName } from '../../components/content/LeftCreateTable'

export default defineEventHandler(async (event) => {
  const prisma = usePrisma(event)

  return prisma.$executeRaw`CREATE TABLE starter;`
})