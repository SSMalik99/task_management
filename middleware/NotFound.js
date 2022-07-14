const {sendResponse} = require('../Helper/Helper')

const NotFound = (req, res) => {
    
    return res.status(404).json(sendResponse(
        404,
        "This Route does't exists.",
        {}
    ))
}

module.exports = NotFound