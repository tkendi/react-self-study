const express = require('express')
const app = express();
const api = require('./routes/index');
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 4000;

app.use(cors())
app.use('/api', api)

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`)
})
