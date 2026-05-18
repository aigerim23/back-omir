import express, { Request, Response } from 'express'
import { PrismaClient } from '../generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'
import { authMiddleware } from '../middleware/auth.js'
import 'dotenv/config'

const router = express.Router()
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

// GET /api/posts — все опубликованные (публичный)
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' }
    })
    res.json(posts)
  } catch {
    res.status(500).json({ message: 'Ошибка сервера' })
  }
})

router.get('/all', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' }
    })
    res.json(posts)
  } catch (e) {
    console.error('POSTS ALL ERROR:', e)  // ← добавь
    res.status(500).json({ message: 'Ошибка сервера' })
  }
})

// GET /api/posts/:id — одна новость
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: Number(req.params.id) }
    })
    if (!post) {
      res.status(404).json({ message: 'Новость не найдена' })
      return
    }
    res.json(post)
  } catch {
    res.status(500).json({ message: 'Ошибка сервера' })
  }
})

// POST /api/posts — создать (только админ)
router.post('/', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  const { title, content, image, published } = req.body
  try {
    const post = await prisma.post.create({
      data: { title, content, image, published: published ?? false }
    })
    res.status(201).json(post)
  } catch {
    res.status(500).json({ message: 'Ошибка сервера' })
  }
})

// PUT /api/posts/:id — обновить (только админ)
router.put('/:id', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  const { title, content, image, published } = req.body
  try {
    const post = await prisma.post.update({
      where: { id: Number(req.params.id) },
      data: { title, content, image, published }
    })
    res.json(post)
  } catch {
    res.status(500).json({ message: 'Ошибка сервера' })
  }
})

// DELETE /api/posts/:id — удалить (только админ)
router.delete('/:id', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.post.delete({
      where: { id: Number(req.params.id) }
    })
    res.json({ message: 'Удалено' })
  } catch (e) {
  console.error(e)  // ← добавь это
  res.status(500).json({ message: 'Ошибка сервера' })
}
})

export default router