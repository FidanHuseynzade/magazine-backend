const NewsModel = require ("../models/news.model")

const news_controller = {
    getAll: async (req, res) => {
        const{name} = req.query;
        const news = await NewsModel.find({});
        if (name) {
            const filteredNews = news.filter((x)=>x.name.toLowerCase().trim().includes(name.toLowerCase().trim()));
            res.send(filteredNews);
        }
        else{
            res.send(news);
        }
    },
    getOne: async (req, res) => {
        const{id}=req.params;
        const news = await NewsModel.findById(id);
        if (news) {
            res.status(200).send(news)
        }
        else{
            res.send({message:'not found'})
        }
    },
    post: async (req, res) => {
        const newNews = new NewsModel(req.body);
        await newNews.save();
        res.send(newNews);
    },
    delete: async (req, res) => {
        const{id}=req.params;
        await NewsModel.findByIdAndDelete(id);
        const news = await NewsModel.find({});
        res.send(news);
    }, 
    edit: async (req, res) => {
        const{id}=req.params;
        await NewsModel.findByIdAndUpdate(id, req.body);
        const updatedNews = await NewsModel.findById(id);
        res.send(updatedNews);
    }
}

module.exports = news_controller