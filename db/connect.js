const monngoose = require('mongoose')

const connectDb = (url) => {
    monngoose
        .connect(url, {
            useNewUrlParser: true,
            useCreateIndex : true,
            useFindAndModify:false,
            useUnifiedTopology: true
        })
}

module.exports = connectDb