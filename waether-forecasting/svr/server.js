const express = require('express')
const app = express();
const api = require('./routes/index');
const PORT = 4000;

app.use('/api', api)

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`)
})
