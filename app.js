
require('dotenv').config()

const express = require('express')
const taskRoute = require('./routes/task')
const connectDb = require('./db/connect')
const app = express()

const port = 3999

app.use(express.static('./public'))
app.use(express.json())
app.get('/hello', (req, res) => {
    res.send("Task Manager App...");
})

// Task APIs
app.use('/api/v1/tasks', taskRoute);


// start the app
const startApp = async () => {
    try {
        
        await connectDb(process.env.MONGO_DB_URL)
        app.listen(port, console.log(`Server is on ${port}...`))

    } catch (error) {
        console.error(error);
    }
}

startApp()
