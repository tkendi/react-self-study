const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const {User} = require('./models/User')

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

mongoose.connect('mongodb+srv://cha:june1209@boilerplate-rcw92.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Conntected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World'))

app.post('/register', (req, res, next) => {
  //회원 가입 할 때 필요한 정보들을 client에서 가져오면
  //db에 저장한다

  const user = new User(req.body)
  user.save((err, doc) =>{
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
