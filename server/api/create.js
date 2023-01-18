import { usePrisma } from '@sidebase/nuxt-prisma'
import { defineEventHandler } from 'h3'
//const { tableName } = require('../../packages/core/api/create.js')

export default defineEventHandler(async (event) => {
  const prisma = usePrisma(event)

  return prisma.$executeRaw`CREATE TABLE test;`

})