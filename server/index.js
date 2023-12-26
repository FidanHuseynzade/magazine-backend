const express = require('express')
const bodyParser = require('body-parser')
const crypto = require('crypto')
const cors = require('cors')
const mongoose = require('mongoose');
// const data = require('./db');
require('dotenv').config()
const app = express()
app.use(bodyParser.json())
app.use(cors())
const PORT = process.env.PORT || 3000


//schemas
const UserSchema = new mongoose.Schema({
    username: String,
    fullname: String,
    profileImg: String,
    email: String,
    password: String,
    isAdmin: Boolean
})
const PublisherSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    backgroundImg: String,
    profileImg: String,
    name: String,
    description: String,
    joinedDate: Date
});
const NewsSchema = new mongoose.Schema({
    title: String,
    createdAt: Date,
    linkURL: String,
    thumbnailImg: String,
    newsBody: String
})
const PublisherModel = mongoose.model('Publisher', PublisherSchema)
const NewsModel = mongoose.model('News', NewsSchema)
const UserModel = mongoose.model('Users', UserSchema)


//users
app.get('/users', async(req, res) => {
    const{name} = req.query;
    const users = await UserModel.find({});
    if (name) {
        const filteredUsers = users.filter((x)=>x.name.toLowerCase().trim().includes(name.toLowerCase().trim()));
        res.send(filteredUsers);
    }
    else{
        res.send(users);
    }
})

app.get('/users/:id', async (req, res) => {
    const{id}=req.params;
    const users = await UserModel.findById(id);
    if (users) {
        res.status(200).send(users)
    }
    else{
        res.send({message:'not found'})
    }
});

app.post('/users', async (req, res) => {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.send(newUser);

})

app.delete('/users/:id', async (req, res) => {
    const{id}=req.params;
    await UserModel.findByIdAndDelete(id);
    const users = await UserModel.find({});
    res.send(users);
});

app.put('/users/:id', async (req, res) => {
    const{id}=req.params;
    res.send('salam')
})

app.patch('/users:id', async (req, res) => {
    const{id}=req.params;
    await UserModel.findByIdAndUpdate(id, req.body);
    const updatedUser = await UserModel.findById(id);
    res.send(updatedUser);
})

//publishers
app.get('/publishers', async (req, res) => {
    const{name} = req.query;
    const publishers = await PublisherModel.find({});
    if (name) {
        const filteredPublishers = publishers.filter((x)=>x.name.toLowerCase().trim().includes(name.toLowerCase().trim()));
        res.send(filteredPublishers);
    }
    else{
        res.send(publishers);
    }
})

app.get('/publishers/:id', async (req, res) => {
    const{id}=req.params;
    const publishers = await PublisherModel.findById(id);
    if (publishers) {
        res.status(200).send(publishers)
    }
    else{
        res.send({message:'not found'})
    }
});

app.post('/publishers', async (req, res) => {
    const newPublisher = new PublisherModel(req.body);
    await newPublisher.save();
    res.send(newPublisher);
})

app.delete('/publishers/:id', async (req, res) => {
    const{id}=req.params;
    await PublisherModel.findByIdAndDelete(id);
    const publishers = await PublisherModel.find({});
    res.send(publishers);
});

app.put('/publishers:id', async (req, res) => {
    const { id } = req.params;
})

app.patch('/publishers:id', async (req, res) => {
    const{id}=req.params;
    await PublisherModel.findByIdAndUpdate(id, req.body);
    const updatedPublisher = await PublisherModel.findById(id);
    res.send(updatedPublisher);
})

//news
app.get('/news', async (req, res) => {
    const{name} = req.query;
    const news = await NewsModel.find({});
    if (name) {
        const filteredNews = news.filter((x)=>x.name.toLowerCase().trim().includes(name.toLowerCase().trim()));
        res.send(filteredNews);
    }
    else{
        res.send(news);
    }
})

app.get('/news/:id', async (req, res) => {
    const{id}=req.params;
    const news = await NewsModel.findById(id);
    if (news) {
        res.status(200).send(news)
    }
    else{
        res.send({message:'not found'})
    }
});

app.post('/news', async (req, res) => {
    const newNews = new NewsModel(req.body);
    await newNews.save();
    res.send(newNews);
})

app.delete('/news/:id', async (req, res) => {
    const{id}=req.params;
    await NewsModel.findByIdAndDelete(id);
    const news = await NewsModel.find({});
    res.send(news);
});

app.put('/news:id', async (req, res) => {
    const { id } = req.params;
})

app.patch('/news:id', async (req, res) => {
    const{id}=req.params;
    await NewsModel.findByIdAndUpdate(id, req.body);
    const updatedNews = await NewsModel.findById(id);
    res.send(updatedNews);
})

//tags
// app.get('/tags', (req, res) => {
//     if (tags.length == 0) {
//         res.send({
//             message: 'empty array'
//         })
//     }
//     else {
//         res.status(200).send({
//             message: 'success',
//             data: tags
//         })
//     }

// })

// app.get('/tags/:id', (req, res) => {
//     const { id } = req.params;
//     const data = tags.find((x) => x.id === id);
//     if (data !== undefined) {
//         res.status(200).send(data);
//     } else {
//         res.status(204).send('no data');
//     }
// });

// app.post('/tags', (req, res) => {
//     const { name } = req.body;
//     const newTag = {
//         id: crypto.randomUUID(),
//         name
//     }
//     tags.push(newTag)
//     res.send({
//         message: 'tag posted',
//         data: newTag
//     })
// })

// app.delete('/tags/:id', (req, res) => {
//     const { id } = req.params;
//     const idx = tags.find((x) => x.id === id);
//     if (idx === undefined) {
//         res.send({
//             message: 'no data'
//         })
//     }
//     else {
//         res.send({
//             message: 'tag deleted',
//             data: tags.splice(idx, 1)
//         })
//     }

// });

// app.put('/tags:id', (req, res) => {
//     const { id } = req.params;
//     const { name } = req.body;
//     const data = tags.find((x) => x.id == id);
//     const updatedData = {
//         id: data.id
//     };
//     if (name !== undefined) {
//         updatedData.name = name
//     }
//     const idx = tags.findIndex((x) => x.id == id);
//     tags[idx] = updatedData;
//     res.send({
//         message: 'data updated',
//         data: updatedData
//     })
// })

// app.patch('/users:id', (req, res) => {
//     const { id } = req.params;
//     const { name } = req.body;
//     const data = tags.find((x) => x.id == id);
//     if (name !== undefined) {
//         updatedData.name = name
//     }
//     res.send({
//         message: 'data updated',
//         data
//     })
// })

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})

mongoose.connect('mongodb+srv://fidan:jLkwiSERNKfIYzSl@app.shr68vn.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'));