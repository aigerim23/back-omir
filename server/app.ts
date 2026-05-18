import express, { Application } from 'express'
import cors from 'cors'
import 'dotenv/config'

import authRouter from './routes/auth.js'
import postsRouter from './routes/posts.js'
import projectsRouter from './routes/projects.js'
import uploadRouter from './routes/upload.js'

const app: Application = express()

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())
app.use('/uploads', express.static('uploads'))  // ← отдаём файлы статично

app.use('/api/auth', authRouter)
app.use('/api/posts', postsRouter)
app.use('/api/projects', projectsRouter)
app.use('/api/upload', uploadRouter)

app.listen(process.env.PORT, () => {
  console.log(`✅ Сервер запущен на порту ${process.env.PORT}`)
})