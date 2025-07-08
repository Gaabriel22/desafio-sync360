import { useState } from "react"

const UserProfileForm = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ ...user })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="card shadow">
      <div className="card-header">
        <h5 className="mb-0">Editar Perfil</h5>
      </div>
      <div className="card-body">
        <div className="row">
          {[
            { label: "Nome completo", name: "full_name" },
            { label: "Email", name: "email", type: "email" },
            { label: "Telefone", name: "phone_number" },
            { label: "Data de nascimento", name: "birth_date", type: "date" },
            { label: "Rua", name: "street" },
            { label: "Número", name: "number" },
            { label: "Complemento", name: "complement" },
            { label: "Bairro", name: "neighborhood" },
            { label: "Cidade", name: "city" },
            { label: "Estado", name: "state" },
            { label: "CEP", name: "postal_code" },
            { label: "Foto de perfil (URL)", name: "profile_picture" },
          ].map(({ label, name, type = "text" }) => (
            <div className="col-md-6 mb-3" key={name}>
              <label className="form-label">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name] || ""}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="card-footer d-flex justify-content-end gap-2">
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="btn btn-success">
          Salvar
        </button>
      </div>
    </form>
  )
}

export default UserProfileForm
