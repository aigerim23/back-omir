import { PrismaClient } from '../generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'
import bcrypt from 'bcrypt'
import 'dotenv/config'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  const password = await bcrypt.hash('admin123', 10)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@charity.kz' },
    update: {},
    create: {
      email: 'admin@charity.kz',
      password,
      name: 'Администратор'
    }
  })

  console.log('✅ Админ создан:', admin.email)

  await prisma.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Добро пожаловать на сайт фонда',
      content: 'Мы рады приветствовать вас на нашем сайте.',
      published: true
    }
  })

  console.log('✅ Тестовая новость создана')

  await prisma.project.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Помощь детям',
      description: 'Сбор средств для детского дома.',
      goal: 500000,
      collected: 0,
      active: true
    }
  })

  console.log('✅ Тестовый проект создан')
}

main()
  .catch((e) => {
    console.error('❌ Ошибка:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })