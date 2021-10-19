const db = require('../utils/db');
// const fs = require('fs');

const getAll = async (req, res) => {
    const news = await db.news.findAndCountAll();
    res.send(news);
}

const getById = async (req, res) => {
    const news = await db.news.findByPk({
        where: {id: req.params.id}
    });
    res.send(news);
}

const create = async (req, res) => {
    const news = await db.news.create(req.body);
    res.send(news);
}

const update = async (req, res) => {
    const {id} = req.params;
    const news = await db.news.findOne({
        where: {id: id}
    });
    if(!news) res.status(401).send('news not found!');
    else {
        // fs.unlink('public/'.concat(news.url), (err) => {
        //     if(err) console.log(err);
        //     else console.log('success');
        // });

        await db.news.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.send('news successfully updated!');
}
}

const deleteById = async (req, res) => {
    const news = await db.news.findOne({
        where: {id: req.params.id}
    });
    if(!news) res.status(401).send('news not found!')
    else {
        // fs.unlink('public/'.concat(news.url), (err) => {
        //     if(err) console.log(err);
        //     else console.log('success');
        // });

        await db.news.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send('news successfully deleted!');
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
}