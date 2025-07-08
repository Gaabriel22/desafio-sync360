import { useEffect, useState } from "react"
import axios from "axios"
import UserProfile from "../components/UserProfile"
import UserProfileForm from "../components/UserProfileForm"

const ProfilePage = () => {
  const [user, setUser] = useState(null)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    axios
      .get("https://localhost:3000/usuario/1")
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error("Erro ao carregar usuário", err)
      })
  }, [])

  const handleSave = (updatedData) => {
    axios
      .post("https://localhost:3000/usuario/1", updatedData)
      .then(() => {
        setUser(updatedData)
        setEditing(false)
        alert("Perfil atualizado com sucesso!")
      })
      .catch((err) => {
        console.error("Erro ao atualizar usuário:", err)
        alert("Erro ao atualizar perfil.")
      })
  }

  if (!user) return <p>Carregando perfil...</p>

  return (
    <div className="container mt-5">
      {editing ? (
        <UserProfileForm
          user={user}
          onCancel={() => setEditing(false)}
          onSave={handleSave}
        />
      ) : (
        <UserProfile user={user} onEdit={() => setEditing(true)} />
      )}
    </div>
  )
}

export default ProfilePage
