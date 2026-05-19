import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  headers: {
    'ngrok-skip-browser-warning': '1',
  },
})

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
  }
  return config
})

// Посты
export const getPosts = () => api.get('/api/posts')
export const getAllPosts = () => api.get('/api/posts/all')
export const getPost = (id: number) => api.get(`/api/posts/${id}`)
export const createPost = (data: any) => api.post('/api/posts', data)
export const updatePost = (id: number, data: any) => api.put(`/api/posts/${id}`, data)
export const deletePost = (id: number) => api.delete(`/api/posts/${id}`)

// Проекты
export const getProjects = () => api.get('/api/projects')
export const getAllProjects = () => api.get('/api/projects/all')
export const getProject = (id: number) => api.get(`/api/projects/${id}`)
export const createProject = (data: any) => api.post('/api/projects', data)
export const updateProject = (id: number, data: any) => api.put(`/api/projects/${id}`, data)
export const deleteProject = (id: number) => api.delete(`/api/projects/${id}`)

// Авторизация
export const login = (email: string, password: string) =>
  api.post('/api/auth/login', { email, password })

// Загрузка фото
export const uploadImage = (file: File) => {
  const formData = new FormData()
  formData.append('image', file)
  return api.post('/api/upload', formData)
}

export default api