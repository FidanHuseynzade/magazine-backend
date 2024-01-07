const express = require ("express")
const user_router = express.Router()
const user_controller = require ("../controllers/user.controller")
const UserMiddleware = require("../middlewares/user.middleware")

user_router.get("/users", user_controller.getAll)

user_router.get("/users/:id", user_controller.getOne)

user_router.post("/users" , UserMiddleware, user_controller.register)

user_router.delete("/users/:id", user_controller.delete)

user_router.patch("/users/:id", user_controller.edit)

module.exports = user_router