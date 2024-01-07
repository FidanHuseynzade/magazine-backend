const mongoose = require ("mongoose")
require('dotenv').config()

mongoose.connect('mongodb+srv://fidan:jLkwiSERNKfIYzSl@app.shr68vn.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'));