const sendResponse = (status, message, data) => {
    return {
        "status_code" : status,
        "message" : message,
        "data" : data
    }
}

module.exports = {
    sendResponse
    }