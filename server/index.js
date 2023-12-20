const express = require('express')
const bodyParser = require('body-parser')
const crypto = require('crypto')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(bodyParser.json())
app.use(cors())
const PORT = process.env.PORT || 3000

//users
let users = [{
    "id": 1,
    "username": "fidannn",
    "fullname": "",
    "profileImg": "",
    "email": "",
    "password": "",
    "isAdmin": ""
}];

//publishers
let publishers = [{
    "id": "",
    "username": "",
    "password": "",
    "email": "",
    "backgroundImg": "",
    "profileImg": "",
    "name": "",
    "description": "",
    "joinedDate": ""
}];

//tags
let tags = [{
    "id": "",
    "name": ""
}]

//news
let news = [{
    "id": "",
    "title": "",
    "createdAt": "",
    "linkURL": "",
    "thumbnailImg": "",
    "newsBody": ""
}]

//subscriptions
let subscriptions = [{
    "id": "",
    "userId": "",
    "publisherId": ""
}]


//users
app.get('/users', (req, res) => {
    if (users.length == 0) {
        res.send({
            message: 'empty array'
        })
    }
    else {
        res.status(200).send({
            message: 'success',
            data: users
        })
    }

})

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const data = users.find((x) => x.id === id);
    if (data !== undefined) {
        res.status(200).send(data);
    } else {
        res.status(204).send('no data');
    }
});

app.post('/users', (req, res) => {
    const { username, fullname, profileImg, email, password, isAdmin } = req.body;
    const newUser = {
        id: crypto.randomUUID(),
        username,
        fullname,
        profileImg,
        email,
        password,
        isAdmin
    }
    users.push(newUser)
    res.send({
        message: 'user posted',
        data: newUser
    })
})

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const idx = users.find((x) => x.id === id);
    if (idx === undefined) {
        res.send({
            message: 'no data'
        })
    }
    else {
        res.send({
            message: 'user deleted',
            data: users.splice(idx, 1)
        })
    }

});

app.put('/users:id', (req, res) => {
    const { id } = req.params;
    const { username, fullname, profileImg, email, password, isAdmin } = req.body;
    const data = users.find((x) => x.id == id);
    const updatedData = {
        id: data.id
    };
    if (username !== undefined) {
        updatedData.username = username
    }
    if (fullname !== undefined) {
        updatedData.fullname = fullname
    }
    if (profileImg !== undefined) {
        updatedData.profileImg = profileImg
    }
    if (email !== undefined) {
        updatedData.email = email
    }
    if (password !== undefined) {
        updatedData.password = password
    }
    if (isAdmin !== undefined) {
        updatedData.isAdmin = isAdmin
    }
    const idx = users.findIndex((x) => x.id == id);
    users[idx] = updatedData;
    res.send({
        message: 'data updated',
        data: updatedData
    })
})

app.patch('/users:id', (req, res) => {
    const { id } = req.params;
    const { username, fullname, profileImg, email, password, isAdmin } = req.body;
    const data = users.find((x) => x.id == id);
    if (username !== undefined) {
        updatedData.username = username
    }
    if (fullname !== undefined) {
        updatedData.fullname = fullname
    }
    if (profileImg !== undefined) {
        updatedData.profileImg = profileImg
    }
    if (email !== undefined) {
        updatedData.email = email
    }
    if (password !== undefined) {
        updatedData.password = password
    }
    if (isAdmin !== undefined) {
        updatedData.isAdmin = isAdmin
    }
    res.send({
        message: 'data updated',
        data
    })
})

//publishers
app.get('/publishers', (req, res) => {
    if (publishers.length == 0) {
        res.send({
            message: 'empty array'
        })
    }
    else {
        res.status(200).send({
            message: 'success',
            data: publishers
        })
    }
})

app.get('/publishers/:id', (req, res) => {
    const { id } = req.params;
    const data = publishers.find((x) => x.id === id);
    if (data !== undefined) {
        res.status(200).send(data);
    } else {
        res.status(204).send('no data');
    }
});

app.post('/publishers', (req, res) => {
    const { username, password, email, backgroundImg, profileImg, name, description, joinedDate } = req.body;
    const newPublisher = {
        id: crypto.randomUUID(),
        username,
        password,
        email,
        backgroundImg,
        profileImg,
        name,
        description,
        joinedDate
    }
    publishers.push(newPublisher)
    res.send({
        message: 'user posted',
        data: newPublisher
    })
})

app.delete('/publishers/:id', (req, res) => {
    const { id } = req.params;
    const idx = publishers.find((x) => x.id === id);
    if (idx === undefined) {
        res.send({
            message: 'no data'
        })
    }
    else {
        res.send({
            message: 'publisher deleted',
            data: publishers.splice(idx, 1)
        })
    }

});

app.put('/publishers:id', (req, res) => {
    const { id } = req.params;
    const { username, password, email, backgroundImg, profileImg, name, description, joinedDate } = req.body;
    const data = publishers.find((x) => x.id == id);
    const updatedData = {
        id: data.id
    };
    if (username !== undefined) {
        updatedData.username = username
    }
    if (password !== undefined) {
        updatedData.password = password
    }
    if (email !== undefined) {
        updatedData.email = email
    }
    if (backgroundImg !== undefined) {
        updatedData.backgroundImg = backgroundImg
    }
    if (profileImg !== undefined) {
        updatedData.profileImg = profileImg
    }
    if (name !== undefined) {
        updatedData.name = name
    }
    if (description !== undefined) {
        updatedData.description = description
    }
    if (joinedDate !== undefined) {
        updatedData.joinedDate = joinedDate
    }
    const idx = publishers.findIndex((x) => x.id == id);
    users[idx] = updatedData;
    res.send({
        message: 'data updated',
        data: updatedData
    })
})

app.patch('/publishers:id', (req, res) => {
    const { id } = req.params;
    const { username, password, email, backgroundImg, profileImg, name, description, joinedDate } = req.body;
    const data = publishers.find((x) => x.id == id);
    if (username !== undefined) {
        updatedData.username = username
    }
    if (password !== undefined) {
        updatedData.password = password
    }
    if (email !== undefined) {
        updatedData.email = email
    }
    if (backgroundImg !== undefined) {
        updatedData.backgroundImg = backgroundImg
    }
    if (profileImg !== undefined) {
        updatedData.profileImg = profileImg
    }
    if (name !== undefined) {
        updatedData.name = name
    }
    if (description !== undefined) {
        updatedData.description = description
    }
    if (joinedDate !== undefined) {
        updatedData.joinedDate = joinedDate
    }
    res.send({
        message: 'data updated',
        data
    })
})

//tags
app.get('/tags', (req, res) => {
    if (tags.length == 0) {
        res.send({
            message: 'empty array'
        })
    }
    else {
        res.status(200).send({
            message: 'success',
            data: tags
        })
    }

})

app.get('/tags/:id', (req, res) => {
    const { id } = req.params;
    const data = tags.find((x) => x.id === id);
    if (data !== undefined) {
        res.status(200).send(data);
    } else {
        res.status(204).send('no data');
    }
});

app.post('/tags', (req, res) => {
    const { name } = req.body;
    const newTag = {
        id: crypto.randomUUID(),
        name
    }
    tags.push(newTag)
    res.send({
        message: 'tag posted',
        data: newTag
    })
})

app.delete('/tags/:id', (req, res) => {
    const { id } = req.params;
    const idx = tags.find((x) => x.id === id);
    if (idx === undefined) {
        res.send({
            message: 'no data'
        })
    }
    else {
        res.send({
            message: 'tag deleted',
            data: tags.splice(idx, 1)
        })
    }

});

app.put('/tags:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const data = tags.find((x) => x.id == id);
    const updatedData = {
        id: data.id
    };
    if (name !== undefined) {
        updatedData.name = name
    }
    const idx = tags.findIndex((x) => x.id == id);
    tags[idx] = updatedData;
    res.send({
        message: 'data updated',
        data: updatedData
    })
})

app.patch('/users:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const data = tags.find((x) => x.id == id);
    if (name !== undefined) {
        updatedData.name = name
    }
    res.send({
        message: 'data updated',
        data
    })
})

//news
app.get('/news', (req, res) => {
    if (news.length == 0) {
        res.send({
            message: 'empty array'
        })
    }
    else {
        res.status(200).send({
            message: 'success',
            data: news
        })
    }

})

app.get('/news/:id', (req, res) => {
    const { id } = req.params;
    const data = news.find((x) => x.id === id);
    if (data !== undefined) {
        res.status(200).send(data);
    } else {
        res.status(204).send('no data');
    }
});

app.post('/news', (req, res) => {
    const { title, createdAt, linkURL, thumbnailImg, newsBody } = req.body;
    const newNews = {
        id: crypto.randomUUID(),
        title,
        createdAt,
        linkURL,
        thumbnailImg,
        newsBody
    }
    news.push(newNews)
    res.send({
        message: 'news posted',
        data: newNews
    })
})

app.delete('/news/:id', (req, res) => {
    const { id } = req.params;
    const idx = news.find((x) => x.id === id);
    if (idx === undefined) {
        res.send({
            message: 'no data'
        })
    }
    else {
        res.send({
            message: 'news deleted',
            data: news.splice(idx, 1)
        })
    }

});

app.put('/news:id', (req, res) => {
    const { id } = req.params;
    const { title, createdAt, linkURL, thumbnailImg, newsBody } = req.body;
    const data = news.find((x) => x.id == id);
    const updatedData = {
        id: data.id
    };
    if (title !== undefined) {
        updatedData.title = title
    }
    if (createdAt !== undefined) {
        updatedData.createdAt = createdAt
    }
    if (linkURL !== undefined) {
        updatedData.linkURL = linkURL
    }
    if (thumbnailImg !== undefined) {
        updatedData.thumbnailImg = thumbnailImg
    }
    if (newsBody !== undefined) {
        updatedData.newsBody = newsBody
    }
    const idx = news.findIndex((x) => x.id == id);
    news[idx] = updatedData;
    res.send({
        message: 'data updated',
        data: updatedData
    })
})

app.patch('/users:id', (req, res) => {
    const { id } = req.params;
    const { title, createdAt, linkURL, thumbnailImg, newsBody } = req.body;
    const data = news.find((x) => x.id == id);
    if (title !== undefined) {
        updatedData.title = title
    }
    if (createdAt !== undefined) {
        updatedData.createdAt = createdAt
    }
    if (linkURL !== undefined) {
        updatedData.linkURL = linkURL
    }
    if (thumbnailImg !== undefined) {
        updatedData.thumbnailImg = thumbnailImg
    }
    if (newsBody !== undefined) {
        updatedData.newsBody = newsBody
    }
    res.send({
        message: 'data updated',
        data
    })
})

//subscriptions
app.get('/subs', (req, res) => {
    if (subscriptions.length == 0) {
        res.send({
            message: 'empty array'
        })
    }
    else {
        res.status(200).send({
            message: 'success',
            data: subscriptions
        })
    }

})

app.get('/subs/:id', (req, res) => {
    const { id } = req.params;
    const data = subscriptions.find((x) => x.id === id);
    if (data !== undefined) {
        res.status(200).send(data);
    } else {
        res.status(204).send('no data');
    }
});

app.post('/subs', (req, res) => {
    const { userId, publisherId } = req.body;
    const newSubs = {
        id: crypto.randomUUID(),
        userId,
        publisherId
    }
    subscriptions.push(newSubs)
    res.send({
        message: 'subs posted',
        data: newSubs
    })
})

app.delete('/subs/:id', (req, res) => {
    const { id } = req.params;
    const idx = subscriptions.find((x) => x.id === id);
    if (idx === undefined) {
        res.send({
            message: 'no data'
        })
    }
    else {
        res.send({
            message: 'subs deleted',
            data: subscriptions.splice(idx, 1)
        })
    }

});

app.put('/subs:id', (req, res) => {
    const { id } = req.params;
    const { userId, publisherId } = req.body;
    const data = subscriptions.find((x) => x.id == id);
    const updatedData = {
        id: data.id
    };
    if (userId !== undefined) {
        updatedData.userId = userId
    }
    if (publisherId !== undefined) {
        updatedData.publisherId = publisherId
    }
    const idx = subscriptions.findIndex((x) => x.id == id);
    subscriptions[idx] = updatedData;
    res.send({
        message: 'data updated',
        data: updatedData
    })
})

app.patch('/subs:id', (req, res) => {
    const { id } = req.params;
    const { userId, publisherId } = req.body;
    const data = subscriptions.find((x) => x.id == id);
    if (userId !== undefined) {
        updatedData.userId = userId
    }
    if (publisherId !== undefined) {
        updatedData.publisherId = publisherId
    }
    res.send({
        message: 'data updated',
        data
    })
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})