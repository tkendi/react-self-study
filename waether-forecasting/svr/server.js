const express = require('express')
const app = express();
const api = require('./routes/index');
const cors = require('cors')
const bodyParser = require('body-parser')
const schedule = require('node-schedule')
const PORT = 4000;

app.use(cors())
app.use('/api', api)
const j = schedule.scheduleJob('10****', () => {
    app.use(bodyParser.json())
    console.log('node schedule testing')
})

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`)
})
