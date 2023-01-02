import { usePrisma } from '@sidebase/nuxt-prisma'
import { tableName, tableDescription, tableBroadcast, tableVisible, tableColumnName, tableColumnType, tableColumnDefault } from '../../components/content/LeftCreateTable'

export default defineEventHandler(async (event) => {
  const prisma = usePrisma(event)

  return prisma.$executeRaw`CREATE TABLE ${tableName} (${tableColumnName} ${tableColumnType} ${tableColumnDefault} ${tableVisible} ${tableBroadcast}) is '${tableDescription}'`
})
  