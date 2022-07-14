const mongoose = require('mongoose')

const sendResponse = (status, message, data) => {
    return {
        "status_code" : status,
        "message" : message,
        "data" : data
    }
}
const isValidMongoId = (id) => {
    return mongoose.isValidObjectId(id)
}

module.exports = {
    sendResponse,
    isValidMongoId
    }