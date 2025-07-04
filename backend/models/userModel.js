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
    const {
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
    } = data

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
      id,
    ]

    connection.query(sql, params, (err, result) => {
      if (err) return callback(err)
      return callback(null, result)
    })
  },
}

module.exports = userModel
