import express, { Request, Response } from 'express'
import { PrismaClient } from '../generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'
import { authMiddleware } from '../middleware/auth.js'
import 'dotenv/config'

const router = express.Router()
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

// GET /api/projects — активные проекты (публичный)
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const projects = await prisma.project.findMany({
      where: { active: true },
      orderBy: { createdAt: 'desc' }
    })
    res.json(projects)
  } catch {
    res.status(500).json({ message: 'Ошибка сервера' })
  }
})

// GET /api/projects/all — все проекты (только админ)
router.get('/all', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    })
    res.json(projects)
  } catch {
    res.status(500).json({ message: 'Ошибка сервера' })
  }
})

// GET /api/projects/:id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: Number(req.params.id) }
    })
    if (!project) {
      res.status(404).json({ message: 'Проект не найден' })
      return
    }
    res.json(project)
  } catch {
    res.status(500).json({ message: 'Ошибка сервера' })
  }
})

// POST /api/projects (только админ)
router.post('/', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  const { title, description, image, goal } = req.body
  try {
    const project = await prisma.project.create({
      data: { title, description, image, goal, collected: 0 }
    })
    res.status(201).json(project)
  } catch {
    res.status(500).json({ message: 'Ошибка сервера' })
  }
})

// PUT /api/projects/:id (только админ)
router.put('/:id', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  const { title, description, image, goal, collected, active } = req.body
  try {
    const project = await prisma.project.update({
      where: { id: Number(req.params.id) },
      data: { title, description, image, goal, collected, active }
    })
    res.json(project)
  } catch {
    res.status(500).json({ message: 'Ошибка сервера' })
  }
})

// DELETE /api/projects/:id (только админ)
router.delete('/:id', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.project.delete({
      where: { id: Number(req.params.id) }
    })
    res.json({ message: 'Удалено' })
  } catch (e) {
  console.error(e)  // ← добавь это
  res.status(500).json({ message: 'Ошибка сервера' })
}
})

export default router