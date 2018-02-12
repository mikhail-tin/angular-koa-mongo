module.exports = env => {
    /*if(env.NODE_ENV == 'prod') {
        return require('./config/webpack.prod.js');
    } else {*/
        return require('./config/webpack.dev.js');
    //}
};
