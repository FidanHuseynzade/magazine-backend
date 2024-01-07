const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(bodyParser.json())
app.use(cors())
require("./config/db.js")
// const PORT = process.env.PORT || 3000
const PORT = 3000

const user_router = require("./routers/user.router.js")
const publisher_router = require("./routers/publisher.router.js")
const news_router = require("./routers/news.router.js")

app.use(user_router);
app.use(publisher_router);
app.use(news_router)

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})