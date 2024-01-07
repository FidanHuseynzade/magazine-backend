const express = require ("express")
const publisher_controller = require("../controllers/publisher.controller")
const PublisherMiddleware = require ("../middlewares/publisher.middleware")
const publisher_router = express.Router()

publisher_router.get("/publishers", publisher_controller.getAll)

publisher_router.get("/publisher/:id", publisher_controller.getOne)

publisher_router.post("/publishers", PublisherMiddleware, publisher_controller.register)

publisher_router.delete("/publishers/:id", publisher_controller.delete)

publisher_router.patch("/publishers/:id", publisher_controller.edit)

module.exports = publisher_router