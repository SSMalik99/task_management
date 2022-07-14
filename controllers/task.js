const Task = require('../Models/Task')
const TaskResource = require('../resource/Task/TaskResource')
const TaskCollection = require('../resource/Task/TaskCollection')
const { sendResponse } = require('../Helper/Helper')

const getTasks = async (req, res) => {
    
    let tasks = new TaskCollection(await Task.find({}))
    
    let result = sendResponse(
            201, 
            "Tasks List", 
            tasks.Tasks
    )

    res.status(200).json(result)
}

const createTask = async (req, res) => {
    let result = sendResponse(
            201, 
            "Task Created", 
        TaskResource(await Task.create(req.body))
    )
    res.status(201).json(result)
}

const getSingleTask = (req, res) => {
    res.send('single task')
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}


module.exports = {
    getTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask 
}