import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
})

// Função para pegar usuário pelo ID
export const getUser = (id) => api.get(`/usuario/${id}`)

// Função para atualizar usuário pelo ID
export const updateUser = (id, data) => api.post(`/usuario/${id}`, data)

export default api
