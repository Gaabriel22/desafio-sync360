const UserProfile = ({ user, onEdit }) => {
  const formatDate = (isoString) => {
    if (!isoString) return ""
    const date = new Date(isoString)
    return date.toLocaleDateString("pt-BR")
  }

  const calculateAge = (birthDate) => {
    if (!birthDate) return ""
    const birth = new Date(birthDate)
    const today = new Date()
    let age = today.getFullYear() - birth.getFullYear()
    const m = today.getMonth() - birth.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  return (
    <div className="card shadow">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Perfil do Usuário</h5>
        <button className="btn btn-primary" onClick={onEdit}>
          Editar
        </button>
      </div>
      <div className="card-body">
        <div className="row">
          {user.profile_picture && (
            <div className="col-md-3 text-center mb-3">
              <img
                src={user.profile_picture}
                alt="Foto de perfil"
                className="img-fluid rounded"
              />
            </div>
          )}
          <div className="col-md-9">
            <p>
              <strong>Nome:</strong> {user.full_name}
            </p>
            <p>
              <strong>Idade:</strong> {calculateAge(user.birth_date)}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Telefone:</strong> {user.phone_number}
            </p>
            <p>
              <strong>Data de nascimento:</strong> {formatDate(user.birth_date)}
            </p>
            <p>
              <strong>Endereço:</strong>{" "}
              {`${user.street}, ${user.number} ${user.complement || ""}`}
            </p>
            <p>
              <strong>Bairro:</strong> {user.neighborhood}
            </p>
            <p>
              <strong>Cidade:</strong> {user.city} - {user.state}
            </p>
            <p>
              <strong>CEP:</strong> {user.postal_code}
            </p>
            <p>
              <strong>Biografia:</strong> {user.biography || "Não informada"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
