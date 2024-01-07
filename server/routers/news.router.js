const express = require ("express")
const news_controller = require("../controllers/news.controller")
const news_router = express.Router()

news_router.get("/news", news_controller.getAll)

news_router.get("/news/:id", news_controller.getOne)

news_router.post("/news", news_controller.post)

news_router.delete("/news/:id", news_controller.delete)

news_router.patch("/news/:id", news_controller.edit)

module.exports = news_router