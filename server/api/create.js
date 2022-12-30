import { usePrisma } from '@sidebase/nuxt-prisma'

export default defineEventHandler(async (event) => {
  const prisma = usePrisma(event)

  return prisma.$executeRaw`CREATE TABLE ${sample}`
})
  