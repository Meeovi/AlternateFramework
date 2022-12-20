const { defineEventHandler } = require('h3');
const { PrismaClient } = require("@prisma/client");

export default defineEventHandler((event) => {
    const prisma = PrismaClient(event)

    return prisma.users.findMany()
  })
  