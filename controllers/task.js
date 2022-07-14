const Task = require('../Models/Task')
const TaskResource = require('../resource/Task/TaskResource')
const TaskCollection = require('../resource/Task/TaskCollection')
const { sendResponse, isValidMongoId } = require('../Helper/Helper')

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

const getSingleTask = async (req, res) => {
    // const {id:taskId} if we want to alias of the param 
    const id = req.params.id
    if(!isValidMongoId(id)){
        return res.status(400).json(sendResponse(
            400, 
            "Not a valid id", 
            {}
        ))
    }

    try {
        
        let task = await Task.findOne({_id:id})    
        
        if (!task){
            return res.status(404).json(sendResponse(
                404, 
                "Task Not Found!", 
                {}
            ))
        }

        res.status(201).json(sendResponse(
            200, 
            "Single Task", 
            TaskResource(task)
        ))
        
    } catch (error) {
        res.status(500).json(error)
    }
    
}

const updateTask = async (req, res) => {
    const id = req.params.id
    if(!isValidMongoId(id)){
        return res.status(400).json(sendResponse(
            400, 
            "Not a valid id", 
            {}
        ))
    }

    try {
        
        let task = await Task.findOneAndUpdate({_id:id}, req.body, {
            new : true,
            runValidators:true
        })    
        
        if (!task){
            return res.status(404).json(sendResponse(
                404, 
                "Task Not Found!", 
                {}
            ))
        }

        res.status(201).json(sendResponse(
            200, 
            "Task Updated successfully", 
            TaskResource(task)
        ))
        
    } catch (error) {
        res.status(500).json(error)
    }

}

const deleteTask = async (req, res) => {
    const id = req.params.id
    if(!isValidMongoId(id)){
        return res.status(400).json(sendResponse(
            400, 
            "Not a valid id", 
            {}
        ))
    }

    try {
        let task = await Task.findOneAndDelete({_id:id})
        if (!task){
            return res.status(404).json(sendResponse(
                404, 
                "Task Not Found!", 
                {}
            ))
        }

        res.status(201).json(sendResponse(
            200, 
            "Task is delted successfully", 
            {}
        ))
        
    } catch (error) {
        res.status(500).json(error)
    }
    
}


module.exports = {
    getTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask 
}