const express = require('express')
const cors = require('cors')
var multipart = require('connect-multiparty')
const bodyParser = require('body-parser')

const {api} = require('./config');

const route = require('./routes');

const app = express()
var multipartMiddleware = multipart({uploadDir:'./public/media'});

app.use(express.static('public'));

// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//config cors 
var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    exposedHeaders: 'Content-Range',
}

app.use(cors(corsOptions))

const checkHealth = (req, res) => {
    res.send('SERVER IS RUNNING... !!!')
}

app.get('/', checkHealth)

// Upload images from ckeditor
app.post('/upload', multipartMiddleware, (req, res) => {
    const pathFile = req.files.upload.path.slice(6);
    
    res.send({
        uploaded:true,
        url:`${process.env.URL_BE_API}${pathFile}`
    })
})

route(app);

const PORT = api.port;
app.listen(PORT, err => {
    if (err) console.log(err)
    else console.log(`app listen at ${PORT}`)
})
