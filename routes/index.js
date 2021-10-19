const authRoute = require('./auth');
const userRoute = require('./user');
const newsRoute = require('./news');

const route = (app) => {
    app.use('/api/auth', authRoute);
    app.use('/api/user', userRoute);
    app.use('/api/news', newsRoute);
}

module.exports = route;