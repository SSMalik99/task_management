const express = require('express')
const router = express.Router()
const { 
    getTasks, 
    createTask, 
    updateTask, 
    deleteTask, 
    getSingleTask 
}  = require('../controllers/task')

// Tasks = new Tasks()
router.route('/').get(getTasks).post(createTask)

router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)

module.exports = router