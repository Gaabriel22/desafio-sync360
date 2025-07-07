const express = require("express")
const router = express.Router()
const { getUser, updateUser } = require("../controllers/userController")

// GET /usuario/:id
router.get("/:id", getUser)

// POST /usuario/:id
router.post(":/id", updateUser)

module.exports = router
