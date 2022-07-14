const TaskResource = require('./TaskResource');

class TaskCollection {
    #resource
    constructor (resource) {
        this.resource = resource
    }

    get Tasks() {
        return {
            "tasks" : this.resource.map(task => TaskResource(task))
        }
    }
}

module.exports = TaskCollection