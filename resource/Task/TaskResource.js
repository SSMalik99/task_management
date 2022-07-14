const TaskResource = (data) => {
    return {
        "_id" : data._id,
        "name" : data.name,
        "completed" : data.completed
    };
}

module.exports = TaskResource