import express, { Request, Response } from 'express'
import { authMiddleware } from '../middleware/auth.js'
import upload from '../middleware/upload.js'

const router = express.Router()

// POST /api/upload — загрузка одного изображения
router.post(
  '/',
  authMiddleware,
  upload.single('image'),
  async (req: Request, res: Response): Promise<void> => {
    try {
      if (!req.file) {
        res.status(400).json({ message: 'Файл не загружен' })
        return
      }

      // Возвращаем путь к файлу
      const imageUrl = `/uploads/${req.file.filename}`
      res.json({ url: imageUrl })

    } catch (e) {
      res.status(500).json({ message: 'Ошибка загрузки' })
    }
  }
)

export default router