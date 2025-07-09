const connection = require("../config/db")

const userModel = {
  getUserById: (id, callback) => {
    const sql = "SELECT * FROM users WHERE id = ?"
    connection.query(sql, [id], (err, results) => {
      if (err) return callback(err)
      if (results.length === 0) return callback(null, null)
      return callback(null, results[0])
    })
  },

  updateUserById: (id, data, callback) => {
    let {
      full_name,
      email,
      phone_number,
      birth_date,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      postal_code,
      profile_picture,
      biography,
    } = data

    // Corrigir formato da data para 'YYYY-MM-DD' (se birth_date existir)
    if (birth_date) {
      const date = new Date(birth_date)
      const yyyy = date.getFullYear()
      const mm = String(date.getMonth() + 1).padStart(2, "0")
      const dd = String(date.getDate()).padStart(2, "0")
      birth_date = `${yyyy}-${mm}-${dd}`
    }

    const sql = `
  UPDATE users SET
    full_name = ?,
    email = ?,
    phone_number = ?,
    birth_date = ?,
    street = ?,
    number = ?,
    complement = ?,
    neighborhood = ?,
    city = ?,
    state = ?,
    postal_code = ?,
    profile_picture = ?,
    biography = ?,
    updated_at = CURRENT_TIMESTAMP
  WHERE id = ?
`

    const params = [
      full_name,
      email,
      phone_number,
      birth_date,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      postal_code,
      profile_picture,
      biography,
      id,
    ]

    connection.query(sql, params, (err, result) => {
      if (err) return callback(err)
      return callback(null, result)
    })
  },
}

module.exports = userModel
