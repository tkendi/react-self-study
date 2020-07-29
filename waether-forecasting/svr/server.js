const express = require('express')
const app = express();
const api = require('./routes/index');
const cors = require('cors')
const PORT = 4000;

app.use('/api', api)
app.use(cors())

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`)
})
