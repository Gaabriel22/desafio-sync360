const userModel = require("../models/userModel")

// GET /usuario/:id
const getUser = (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id)) {
    res.status(400).json({ error: "ID Inválido." })
  }

  userModel.getUserById(id, (err, user) => {
    if (err) {
      console.err(err)
      res.status(500).json({ error: "Erro ao consultar o usuário." })
    }
    if (!user) {
      res.status(404).json({ error: "Usuário não encontrado." })
    }
    res.json(user)
  })
}

// POST /usuario/:id
const updateUser = (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id)) {
    res.status(400).json({ error: "ID Inválido." })
  }

  const data = req.body

  if (
    !data.full_name ||
    !data.email ||
    !data.phone_number ||
    !data.city ||
    !data.state ||
    !data.postal_code
  ) {
    res.status(400).json({ error: "Campos obrigatórios faltando." })
  }

  userModel.updateUserById(id, data, (err, result) => {
    if (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao atualizar o usuário." })
    }
    if (result.affectedRows === 0) {
      res.status(400).json({ error: "Usuário não encontrado." })
    }
    res.json({ message: "Usuário atualizado com sucesso." })
  })
}

module.exports = { getUser, updateUser }
